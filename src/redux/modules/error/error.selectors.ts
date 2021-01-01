import { AppState } from '../../store';

export const getErrorMessageByActionType = (state: AppState) => (actionType: string) => {
    const { error } = state;
    return error.actionType === actionType ? error.message : '';
};
