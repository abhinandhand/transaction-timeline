import { Timeline } from './timeline.model';

export interface TimelineState {
  isLoading: boolean;
  timeline: Timeline;
}

export function initialiseTimelineFactory() {
  return {
    timeline: {
      days: [],
    },
    isLoading: false,
  };
}
