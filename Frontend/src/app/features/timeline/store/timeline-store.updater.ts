import { TimelineState } from './timeline-store.state';
import { Timeline } from './timeline.model';

export function setTimelineLoadingState(
  state: TimelineState,
  isLoading: boolean,
): TimelineState {
  return {
    ...state,
    isLoading,
  };
}

export function setTimelineState(
  state: TimelineState,
  timeline: Timeline,
): TimelineState {
  return {
    ...state,
    timeline,
  };
}
