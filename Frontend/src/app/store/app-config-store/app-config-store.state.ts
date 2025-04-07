import { Theme } from '@core/models/app.model';
import { getPreferredTheme } from '@utils/app.util';

export interface AppConfigState {
  isLoading: boolean;
  error: string | null;
  theme: Theme;
}

export function initialiseAppConfigFactory() {
  return {
    isLoading: false,
    error: null,
    theme: getPreferredTheme(),
  };
}
