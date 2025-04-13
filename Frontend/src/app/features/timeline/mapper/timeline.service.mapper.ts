import {
  Timeline,
  TimelineResponse,
  TimelineEntry,
  Transaction,
  TimelineEntryResponse,
  TransactionResponse,
} from '../model/timeline.model';

export class TimelineMapper {
  mapTimelineData(data: TimelineResponse): Timeline {
    return {
      days: data.days.map((day) => this.mapTimelineEntry(day)),
      account: data.account,
      pagination: data.pagination,
    };
  }

  private mapTimelineEntry(entry: TimelineEntryResponse): TimelineEntry {
    return {
      id: entry.id,
      transactionDate: entry.id,
      transactions: entry.transactions.map((transaction) =>
        this.mapTransaction(transaction, entry.id),
      ),
    };
  }

  private mapTransaction(
    transaction: TransactionResponse,
    transactionDateId: string,
  ): Transaction {
    const isCredit = transaction.amount > 0;
    const amountInBaseCurrency = Math.abs(
      transaction.amount / (transaction.currencyRate || 1),
    );
    const transactionDetailId = `txn_${transaction.id.toString()}_${transactionDateId}`;

    return {
      ...transaction,
      amountInBaseCurrency,
      isCredit,
      transactionDetailId,
    };
  }
}
