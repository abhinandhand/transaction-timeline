import { DateRange } from '@core/models/app.model';
import { TimelineEntry } from '../model/timeline.model';

/**
 * Sorts timeline entries by transaction date (newest first) and sorts transactions within each day by timestamp (newest first).
 *
 * @param entities Array of timeline entries to sort.
 * @returns Sorted array of timeline entries.
 */
export function sortTimelineEntities(
  entities: TimelineEntry[],
): TimelineEntry[] {
  return [...entities]
    .sort(
      (a, b) =>
        new Date(b.transactionDate).getTime() -
        new Date(a.transactionDate).getTime(),
    )
    .map((day) => ({
      ...day,
      transactions: [...day.transactions].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      ),
    }));
}

/**
 * Filters timeline entries based on the provided date range.
 *
 * @param entries Array of timeline entries to filter.
 * @param dateRange Date range object containing startDate and endDate.
 * @returns Filtered array of timeline entries.
 */
export function filterTimelineByDateRange(
  entries: TimelineEntry[],
  dateRange: DateRange = { startDate: null, endDate: null },
): TimelineEntry[] {
  const { startDate, endDate } = dateRange;

  if (!startDate && !endDate) {
    return entries;
  }

  return entries.filter((entry) => {
    const entryDate = new Date(entry.transactionDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (!start || entryDate >= start) && (!end || entryDate <= end);
  });
}

/**
 * Filters timeline entries based on the provided search query.
 *
 * @param entries Array of timeline entries to filter.
 * @param searchQuery Search query string.
 * @returns Filtered array of timeline entries.
 */
export function filterTimelineByQuery(
  entries: TimelineEntry[],
  searchQuery: string,
): TimelineEntry[] {
  if (!searchQuery.trim()) {
    return entries;
  }

  const query = searchQuery.toLowerCase().trim();
  const isCreditQuery = query.includes('credit');
  const isDebitQuery = query.includes('debit');
  const cleanQuery = query.replace('credit', '').replace('debit', '').trim();
  const numericQuery = parseFloat(cleanQuery);
  const isNumericQuery = !isNaN(numericQuery);

  return entries.map((entry) => {
    let filteredTransactions = entry.transactions;

    if (isCreditQuery || isDebitQuery) {
      filteredTransactions = filteredTransactions.filter((tx) =>
        isCreditQuery && isDebitQuery
          ? true
          : isCreditQuery
            ? tx.isCredit
            : !tx.isCredit,
      );
    }

    if (cleanQuery) {
      filteredTransactions = filteredTransactions.filter((tx) =>
        [
          tx.id.toString(),
          tx.description,
          tx.otherParty?.name,
          tx.otherParty?.iban,
          tx.currencyCode,
          tx.amountInBaseCurrency.toString(),
        ]
          .filter((val) => val != null)
          .some(
            (val) =>
              val.toLowerCase().includes(cleanQuery) ||
              (isNumericQuery && +val === numericQuery),
          ),
      );
    }

    return {
      ...entry,
      transactions: filteredTransactions,
    };
  });
}

/**
 * Removes empty timeline entries (entries with no matching transactions).
 *
 * @param timeline Array of timeline entries.
 * @returns Filtered array of timeline entries.
 */
export function filterNonEmptyTimelineEntries(
  timeline: TimelineEntry[],
): TimelineEntry[] {
  return timeline.filter((day) => day.transactions.length > 0);
}

/**
 * Extracts the transaction Detail ID from a route URL.
 *
 * @param url - E.g., '/timeline/detail/txn_1_2025-04-11'
 * @returns The transaction ID (e.g., 'txn_2025-04-11_1') or null if invalid.
 */
export function extractTransactionDetailIdFromUrl(url: string): string | null {
  if (!url.startsWith('/timeline/detail/')) {
    return null;
  }
  const parts = url.split('/');
  return parts.length >= 4 ? parts[parts.length - 1] : null;
}

/**
 * Extracts the timeline ID from a transaction ID.
 *
 * @param transactionDetailId - E.g., 'txn_1_2025-04-11'
 * @returns The timeline ID (e.g., '2025-04-11') or null if invalid.
 */
export function extractTimelineId(transactionDetailId: string): string | null {
  const parts = transactionDetailId.split('_');
  return parts.length > 1 ? parts[parts.length - 1] : null;
}
