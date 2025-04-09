import { inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';
import { TimelineService } from '../services/timeline.service';
import { TimelineState } from './timeline-store.state';
import {
  setTimelineLoadingState,
  setTimelineState,
} from './timeline-store.updater';
import { Timeline } from './timeline.model';
import { HttpErrorResponse } from '@angular/common/http';

export function withTimelineStoreMethods() {
  return signalStoreFeature(
    {
      state: type<TimelineState>(),
    },

    withMethods((store) => {
      const _timelineService = inject(TimelineService);

      const loadTimeline = rxMethod<void>(
        pipe(
          tap(() =>
            patchState(store, (state) => setTimelineLoadingState(state, true)),
          ),
          switchMap(() =>
            _timelineService.getTimeline().pipe(
              tap((timelineData) => loadTimelineSuccess(timelineData)),
              catchError((error) => loadTimelineFailure(error)),
            ),
          ),
        ),
      );

      const loadTimelineSuccess = (timelineData: Timeline) => {
        patchState(store, (state) => setTimelineLoadingState(state, false));
        patchState(store, (state) => setTimelineState(state, timelineData));
      };

      const loadTimelineFailure = (error: HttpErrorResponse) => {
        patchState(store, (state) => setTimelineLoadingState(state, false));
        console.error('Error loading timeline:', error);
        return EMPTY;
      };

      return {
        loadTimeline,
      };
    }),
  );
}
