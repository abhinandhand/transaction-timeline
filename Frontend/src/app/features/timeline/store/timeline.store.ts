import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withTimelineStoreMethods } from './timeline-store.methods';
import {
  initialiseTimelineFactory,
  TimelineState,
} from './timeline-store.state';

export const TimelineStore = signalStore(
  { providedIn: 'root' },
  withState<TimelineState>(initialiseTimelineFactory),
  withTimelineStoreMethods(),
  withHooks((store) => {
    return {
      onInit() {
        store.timelineRouteEffect$();
        store.timelineDetailRouteEffect$();
      },
    };
  }),
);
