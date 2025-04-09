import { HttpErrorResponse } from '@angular/common/http';
import { AppConfigState } from './app-config-store.state';

export function setLoadingState(
  state: AppConfigState,
  isLoading: boolean,
): AppConfigState {
  return {
    ...state,
    isLoading,
  };
}

export function setErrorState(
  state: AppConfigState,
  error: HttpErrorResponse,
): AppConfigState {
  return {
    ...state,
    error,
  };
}
