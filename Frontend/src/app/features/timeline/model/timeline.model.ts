export enum TimelineRoute {
  Timeline = 'timeline',
  Detail = 'detail',
}

interface OtherParty {
  name: string;
  iban: string;
}

interface Transaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: OtherParty;
}

export interface TimelineEntry {
  id: string;
  transactions: Transaction[];
}

export interface Account {
  id: number;
  name: string;
  iban: string;
  balance: number;
  currencyCode: string;
  currencyRate: number;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface TimelineResponse {
  days: TimelineEntry[];
  account: Account;
  pagination: Pagination;
}
