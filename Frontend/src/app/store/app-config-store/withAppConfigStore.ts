import { signalStoreFeature, withState } from '@ngrx/signals';
import {
  AppConfigState,
  initialiseAppConfigFactory,
} from './app-config-store.state';
import { withAppConfigStoreMethods } from './app.config-store.methods';

export function withAppConfigStore() {
  return signalStoreFeature(
    withState<AppConfigState>(initialiseAppConfigFactory),
    withAppConfigStoreMethods(),
  );
}
