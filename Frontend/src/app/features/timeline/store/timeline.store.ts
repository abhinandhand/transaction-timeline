import { signalStore, withHooks, withState } from '@ngrx/signals';
import {
  initialiseTimelineFactory,
  TimelineState,
} from './timeline-store.state';
import { withTimelineStoreFeature } from './timeline-store.feature';

export const TimelineStore = signalStore(
  { providedIn: 'root' },
  withState<TimelineState>(initialiseTimelineFactory),
  withTimelineStoreFeature(),
  withHooks((store) => {
    return {
      onInit() {
        store.timelineRouteEffect$();
        store.timelineDetailRouteEffect$();
      },
    };
  }),
);
