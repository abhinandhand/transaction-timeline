import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TimelineEntry, TimelineRoute } from '../model/timeline.model';
import {
  extractTimelineId,
  extractTransactionDetailIdFromUrl,
} from '../utils/timeline.utils';

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
  isTimelineNetworkFetchNeeded(timelineEntries: TimelineEntry[]): boolean {
    return !timelineEntries.length;
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
    const transactionDetailId = extractTransactionDetailIdFromUrl(
      routeEvent.urlAfterRedirects,
    );

    if (!transactionDetailId?.match(/^txn_\d+_\d{4}-\d{2}-\d{2}$/)) {
      this.router.navigate([`/${TimelineRoute.Timeline}`]);
      return false;
    }

    const timelineId = extractTimelineId(transactionDetailId);

    if (!timelineId) {
      this.router.navigate([`/${TimelineRoute.Timeline}`]);
      return false;
    }

    return !timelineEntries.some((entry) => entry.id === timelineId);
  }
}
