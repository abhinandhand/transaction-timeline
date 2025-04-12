import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, filter, pipe, switchMap, tap } from 'rxjs';
import {
  Timeline,
  TimelineEntry,
  TimelineRoute,
} from '../model/timeline.model';
import { TimelineRouterService } from '../services/timeline-router.service';
import { TimelineService } from '../services/timeline.service';
import { TimelineState } from './timeline-store.state';
import {
  setAccountState,
  setNoMoreTransactionsState,
  setPaginationState,
  setTimelineErrorState,
  setTimelineLoadingState,
} from './timeline-store.updater';

export function withTimelineStoreMethods() {
  return signalStoreFeature(
    {
      state: type<TimelineState>(),
    },
    withEntities<TimelineEntry>(),
    withMethods((store) => {
      const _timelineService = inject(TimelineService);
      const _router = inject(Router);
      const _routerService = inject(TimelineRouterService);

      const timelineRouteEffect$ = () => {
        _router.events
          .pipe(
            filter((event) => event instanceof NavigationEnd),
            filter(
              (event) =>
                event.urlAfterRedirects === `/${TimelineRoute.Timeline}`,
            ),
            filter(() =>
              _routerService.isTimelineNetworkFetchNeeded(
                store.viewedTransactionId(),
                store.entities(),
              ),
            ),
            tap(() => loadTimeline()),
            takeUntilDestroyed(),
          )
          .subscribe();
      };

      const timelineDetailRouteEffect$ = () => {
        _router.events
          .pipe(
            filter(
              (event): event is NavigationEnd => event instanceof NavigationEnd,
            ),
            filter((event) =>
              event.urlAfterRedirects.includes(`/${TimelineRoute.Detail}/`),
            ),
            filter((event) =>
              _routerService.isTimelineDetailNetworkFetchNeeded(
                event,
                store.entities(),
              ),
            ),
            tap(() => loadTimeline()),
            takeUntilDestroyed(),
          )
          .subscribe();
      };

      const loadTimeline = rxMethod<void>(
        pipe(
          tap(() =>
            patchState(store, (state) => setTimelineLoadingState(state, true)),
          ),
          switchMap(() =>
            _timelineService.getTimeline().pipe(
              tap((timeline) => loadTimelineSuccess(timeline)),
              catchError((error) => loadTimelineFailure(error)),
            ),
          ),
        ),
      );

      const loadTimelineSuccess = (timeline: Timeline) => {
        const { account, days, pagination } = timeline;
        patchState(store, (state) => setTimelineLoadingState(state, false));
        patchState(store, (state) => setAccountState(state, account));
        patchState(store, addEntities(days));
        patchState(store, (state) => setPaginationState(state, pagination));
        if (!pagination.hasNext) {
          patchState(store, (state) => setNoMoreTransactionsState(state, true));
        }
      };

      const loadTimelineFailure = (error: HttpErrorResponse) => {
        patchState(store, (state) => setTimelineLoadingState(state, false));
        patchState(store, (state) => setTimelineErrorState(state, error));
        return EMPTY;
      };

      const loadMoreTimeline = rxMethod<void>(
        pipe(
          filter(() => store.pagination().hasNext),
          switchMap(() =>
            _timelineService
              .getTimeline(store.pagination().currentPage + 1)
              .pipe(
                tap((timelineResponse) =>
                  loadTimelineSuccess(timelineResponse),
                ),
                catchError((error) => loadTimelineFailure(error)),
              ),
          ),
        ),
      );

      const setViewedTransactionId = (transactionId: string | null): void => {
        patchState(store, (state) => ({
          ...state,
          viewedTransactionId: transactionId,
        }));
      };

      return {
        loadTimeline,
        loadMoreTimeline,
        setViewedTransactionId,
        timelineRouteEffect$,
        timelineDetailRouteEffect$,
      };
    }),
  );
}
