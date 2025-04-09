import { Timeline } from './timeline.model';

export interface TimelineState {
  timeline: Timeline;
}

export function initialiseTimelineFactory() {
  return {
    timeline: {
      days: [],
    },
  };
}
