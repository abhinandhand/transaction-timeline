import { Account, Pagination, TimelineEntry } from '../model/timeline.model';

export interface TimelineState {
  timeline: TimelineEntry[];
  account: Account;
  pagination: Pagination;
}

const initialTimelineState: TimelineState = {
  timeline: [],

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
