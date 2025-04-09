import { signalStoreFeature, withHooks, withState } from '@ngrx/signals';
import { withTimelineStoreMethods } from './timeline-store.methods';
import {
  initialiseTimelineFactory,
  TimelineState,
} from './timeline-store.state';

export function withTimelineStore() {
  return signalStoreFeature(
    withState<TimelineState>(initialiseTimelineFactory),
    withTimelineStoreMethods(),
    withHooks((store) => {
      return {
        onInit() {
          store.handleTimelineRouteChange();
          //   router.events
          //     .pipe(
          //       tap((a) => {
          //         console.log('router event' + a);
          //         return a;
          //       }),
          //       filter(
          //         (router) =>
          //           router instanceof NavigationEnd &&
          //           router.url === '/timeline',
          //       ),
          //       tap(() => store.loadTimeline()),
          //       takeUntilDestroyed(),
          //     )
          //     .subscribe(),
          // );
        },
      };
    }),
  );
}
