import { signalStoreFeature, withState } from '@ngrx/signals';
import { withTimelineStoreMethods } from './timeline-store.methods';
import {
  initialiseTimelineFactory,
  TimelineState,
} from './timeline-store.state';

export function withTimelineStore() {
  return signalStoreFeature(
    withState<TimelineState>(initialiseTimelineFactory),
    withTimelineStoreMethods(),
  );
}
