import { HttpErrorResponse } from '@angular/common/http';
import { Account, Pagination, TimelineFilters } from '../model/timeline.model';

export interface TimelineState {
  isLoading: boolean;
  account: Account;
  filters: TimelineFilters;
  pagination: Pagination;
  error: HttpErrorResponse | null;
  isNoMoreTransactions: boolean;
  viewedTransactionDetailId: string | null;
}

const initialTimelineState: TimelineState = {
  isLoading: false,
  error: null,
  filters: {
    dateRange: {
      startDate: null,
      endDate: null,
    },
    transactionType: null,
    searchQuery: '',
  },
  isNoMoreTransactions: false,
  viewedTransactionDetailId: null,
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
