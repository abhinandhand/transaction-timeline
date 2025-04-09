import { signalStore } from '@ngrx/signals';
import { withAppConfigStore } from './app-config-store/withAppConfigStore';
import { withTimelineStore } from '@features/timeline/store/withTimelineStore';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withAppConfigStore(),
  withTimelineStore(),
);
