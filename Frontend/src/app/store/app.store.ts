import { signalStore } from '@ngrx/signals';
import { withAppConfigStore } from './app-config-store/withAppConfigStore';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withAppConfigStore(),
);
