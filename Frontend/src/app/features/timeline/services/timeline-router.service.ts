import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  extractTimelineId,
  extractTransactionIdFromUrl,
} from '@utils/app.util';
import { TimelineEntry } from '../model/timeline.model';

/**
 * Service to handle timeline-related routing and fetch decisions.
 */
@Injectable({
  providedIn: 'root',
})
export class TimelineRouterService {
  private readonly router = inject(Router);

  /**
   * Checks if a network fetch is needed for timeline data based on a transaction ID.
   * @param transactionId - E.g., 'txn_2025-04-11_1' or null
   * @param timelineEntries - Current timeline entries in store
   * @returns True if a fetch is needed (no valid ID or no matching entry)
   */
  isTimelineNetworkFetchNeeded(
    transactionId: string | null,
    timelineEntries: TimelineEntry[],
  ): boolean {
    if (!transactionId) {
      return true;
    }

    const timelineId = extractTimelineId(transactionId);
    if (!timelineId) {
      return true;
    }

    return !timelineEntries.some((entry) => entry.id === timelineId);
  }

  /**
   * Checks if a network fetch is needed for a timeline detail route.
   * @param routeEvent - Router NavigationEnd event
   * @param timelineEntries - Current timeline entries in store
   * @returns True if a fetch is needed for the detail route
   */
  isTimelineDetailNetworkFetchNeeded(
    routeEvent: NavigationEnd,
    timelineEntries: TimelineEntry[],
  ): boolean {
    const transactionId = extractTransactionIdFromUrl(
      routeEvent.urlAfterRedirects,
    );
    return this.isTimelineNetworkFetchNeeded(transactionId, timelineEntries);
  }
}
