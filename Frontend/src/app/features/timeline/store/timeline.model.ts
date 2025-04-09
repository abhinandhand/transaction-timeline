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

interface TimelineEntry {
  id: string;
  transactions: Transaction[];
}

export interface Timeline {
  days: TimelineEntry[];
}
