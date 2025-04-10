import { TimelineState } from './timeline-store.state';
import { Account, Pagination, TimelineEntry } from '../model/timeline.model';

export function setTimelineState(
  state: TimelineState,
  timeline: TimelineEntry[],
): TimelineState {
  return {
    ...state,
    timeline,
  };
}

export function setAccountState(
  state: TimelineState,
  account: Account,
): TimelineState {
  return {
    ...state,
    account,
  };
}
export function setPaginationState(
  state: TimelineState,
  pagination: Pagination,
): TimelineState {
  return {
    ...state,
    pagination,
  };
}
