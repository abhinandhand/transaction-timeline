import {
  Timeline,
  TimelineResponse,
  Transaction,
} from '@features/timeline/model/timeline.model';

export const mockTransaction: Transaction = {
  id: 1,
  timestamp: '2023-10-01T10:00:00Z',
  amount: 100,
  currencyCode: 'USD',
  currencyRate: 0.85,
  description: 'Payment',
  otherParty: { name: 'John Doe', iban: 'DE123' },
  transactionDetailId: '1',
  amountInBaseCurrency: 85,
  isCredit: true,
};

export const mockTimelineResponse: TimelineResponse = {
  days: [
    {
      id: '2023-10-01',
      transactions: [mockTransaction],
    },
  ],
  account: {
    id: 1,
    name: 'Main Account',
    iban: 'NL123',
    balance: 1000,
    currencyCode: 'EUR',
    currencyRate: 1,
  },
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  },
};

export const mockTimeline: Timeline = {
  days: [
    {
      id: '2023-10-01',
      transactionDate: '2023-10-01',
      transactions: [
        {
          id: 1,
          timestamp: '2023-10-01T10:00:00Z',
          amount: 100,
          currencyCode: 'USD',
          currencyRate: 0.85,
          description: 'Payment',
          otherParty: { name: 'John Doe', iban: 'DE123' },
          transactionDetailId: '1',
          amountInBaseCurrency: 85, // 100 * 0.85
          isCredit: false,
        },
      ],
    },
  ],
  account: mockTimelineResponse.account,
  pagination: mockTimelineResponse.pagination,
};
