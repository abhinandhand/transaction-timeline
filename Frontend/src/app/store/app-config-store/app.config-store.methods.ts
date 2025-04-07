import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { AppConfigState } from './app-config-store.state';
import { Theme } from '@core/models/app.model';

export function withAppConfigStoreMethods() {
  return signalStoreFeature(
    { state: type<AppConfigState>() },

    withMethods((store) => {
      const toggleTheme = () => {
        const newTheme: Theme = store.theme() === 'dark' ? 'light' : 'dark';
        patchState(store, { theme: newTheme });
      };

      return {
        toggleTheme,
      };
    }),
  );
}
