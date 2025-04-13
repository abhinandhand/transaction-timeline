import { Theme } from '@core/models/app.model';

export const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme as Theme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

/**
 * Extracts the transaction Detail ID from a route URL.
 * @param url - E.g., '/timeline/detail/txn_1_2025-04-11'
 * @returns The transaction ID (e.g., 'txn_2025-04-11_1') or null if invalid
 */
export const extractTransactionDetailIdFromUrl = (
  url: string,
): string | null => {
  if (!url.startsWith('/timeline/detail/')) {
    return null;
  }
  const parts = url.split('/');
  return parts.length >= 4 ? parts[parts.length - 1] : null;
};

/**
 * Extracts the timeline ID from a transaction ID.
 * @param transactionId - E.g., 'txn_1_2025-04-11'
 * @returns The timeline ID (e.g., '2025-04-11') or null if invalid
 */
export const extractTimelineId = (
  transactionDetailId: string,
): string | null => {
  const parts = transactionDetailId.split('_');
  return parts.length > 1 ? parts[parts.length - 1] : null;
};
