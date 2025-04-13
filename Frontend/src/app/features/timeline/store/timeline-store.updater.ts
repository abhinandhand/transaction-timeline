import { HttpErrorResponse } from '@angular/common/http';
import { Account, Pagination } from '../model/timeline.model';
import { TimelineState } from './timeline-store.state';

export function setTimelineLoadingState(
  state: TimelineState,
  isLoading: boolean,
): TimelineState {
  return {
    ...state,
    isLoading,
  };
}

export function setTimelineErrorState(
  state: TimelineState,
  error: HttpErrorResponse,
): TimelineState {
  return {
    ...state,
    error,
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

export function setNoMoreTransactionsState(
  state: TimelineState,
  isNoMoreTransactions: boolean,
): TimelineState {
  return {
    ...state,
    isNoMoreTransactions,
  };
}
