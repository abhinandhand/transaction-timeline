import { signalStore, withState } from '@ngrx/signals';
import { AppConfigState, initialiseAppConfigFactory } from './app.store.state';
import { withAppStoreMethods } from './app.store.methods';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppConfigState>(initialiseAppConfigFactory),
  withAppStoreMethods(),
);
