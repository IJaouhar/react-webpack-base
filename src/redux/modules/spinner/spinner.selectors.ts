import { AppState } from '../../store';

export const loadingSelector = (state: AppState) => state.spinner.loading;
