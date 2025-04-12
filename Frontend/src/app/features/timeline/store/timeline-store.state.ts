import { HttpErrorResponse } from '@angular/common/http';
import { Account, Pagination } from '../model/timeline.model';

export interface TimelineState {
  account: Account;
  pagination: Pagination;
  isLoading: boolean;
  error: HttpErrorResponse | null;
  isNoMoreTransactions: boolean;
  viewedTransactionId: string | null;
}

const initialTimelineState: TimelineState = {
  isLoading: false,
  error: null,
  isNoMoreTransactions: false,
  viewedTransactionId: null,
  account: {
    id: 0,
    name: '',
    iban: '',
    balance: 0,
    currencyCode: 'EUR',
    currencyRate: 1,
  },
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
  },
};

export function initialiseTimelineFactory(): TimelineState {
  return { ...initialTimelineState };
}
