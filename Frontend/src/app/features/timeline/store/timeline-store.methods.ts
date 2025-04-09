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
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  setErrorState,
  setLoadingState,
} from '@store/app-config-store/app-config-store.updaters';
import { withAppConfigStore } from '@store/app-config-store/withAppConfigStore';
import { catchError, EMPTY, filter, pipe, switchMap, tap } from 'rxjs';
import { TimelineService } from '../services/timeline.service';
import { TimelineState } from './timeline-store.state';
import { setTimelineState } from './timeline-store.updater';
import { Timeline } from './timeline.model';

export function withTimelineStoreMethods() {
  return signalStoreFeature(
    {
      state: type<TimelineState>(),
    },
    withAppConfigStore(),

    withMethods((store) => {
      const _timelineService = inject(TimelineService);
      const router = inject(Router);

      const handleTimelineRouteChange = () => {
        router.events
          .pipe(
            filter(
              (router) =>
                router instanceof NavigationEnd && router.url === '/timeline',
            ),
            tap(() => loadTimeline()),
            takeUntilDestroyed(),
          )
          .subscribe();
      };

      const loadTimeline = rxMethod<void>(
        pipe(
          tap(() => patchState(store, (state) => setLoadingState(state, true))),
          switchMap(() =>
            _timelineService.getTimeline().pipe(
              tap((timelineData) => loadTimelineSuccess(timelineData)),
              catchError((error) => loadTimelineFailure(error)),
            ),
          ),
        ),
      );

      const loadTimelineSuccess = (timelineData: Timeline) => {
        patchState(store, (state) => setLoadingState(state, false));
        patchState(store, (state) => setTimelineState(state, timelineData));
      };

      const loadTimelineFailure = (error: HttpErrorResponse) => {
        patchState(store, (state) => setLoadingState(state, false));
        patchState(store, (state) => setErrorState(state, error));
        return EMPTY;
      };

      return {
        loadTimeline,
        handleTimelineRouteChange,
      };
    }),
  );
}
