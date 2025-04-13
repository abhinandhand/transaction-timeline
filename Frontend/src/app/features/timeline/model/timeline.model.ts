import { DateRange } from '@core/models/app.model';

export enum TimelineRoute {
  Timeline = 'timeline',
  Detail = 'detail',
}

interface OtherParty {
  name: string;
  iban: string;
}

/* Backend data model */
export interface TimelineResponse {
  days: TimelineEntryResponse[];
  account: Account;
  pagination: Pagination;
}
export interface TimelineEntryResponse {
  id: string;
  transactions: TransactionResponse[];
}

export interface TransactionResponse {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: OtherParty;
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

/* Frontend data model */

export interface Timeline {
  days: TimelineEntry[];
  account: Account;
  pagination: Pagination;
}

export interface TimelineEntry {
  id: string;
  transactionDate: string;
  transactions: Transaction[];
}

export interface Transaction extends TransactionResponse {
  transactionDetailId: string;
  amountInBaseCurrency: number;
  isCredit: boolean;
}

/* filter query model */

export interface TimelineFilters {
  searchQuery: string;
  dateRange: DateRange;
  currencyCode?: string | null;
  transactionType?: 'debit' | 'credit' | null;
}
