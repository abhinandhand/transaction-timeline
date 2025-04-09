import { TimelineState } from './timeline-store.state';
import { Timeline } from './timeline.model';

export function setTimelineState(
  state: TimelineState,
  timeline: Timeline,
): TimelineState {
  return {
    ...state,
    timeline,
  };
}
