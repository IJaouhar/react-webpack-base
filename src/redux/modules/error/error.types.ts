export const SET_ERROR = 'SET_ERROR';

export interface ErrorState {
    message: string;
    code?: number | string;
    actionType?: string;
    showNotification?: boolean;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: ErrorState;
}

export type ErrorActionTypes = SetErrorAction;
