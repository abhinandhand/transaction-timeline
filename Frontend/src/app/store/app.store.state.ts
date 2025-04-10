import { Theme } from '@core/models/app.model';
import { getPreferredTheme } from '@utils/app.util';

export interface AppConfigState {
  theme: Theme;
}

export function initialiseAppConfigFactory() {
  return {
    theme: getPreferredTheme(),
  };
}
