import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { AppConfigState } from './app.store.state';
import { Theme } from '@core/models/app.model';

export function withAppStoreMethods() {
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
