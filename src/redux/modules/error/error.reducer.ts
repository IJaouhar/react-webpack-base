import { ErrorState, ErrorActionTypes, SET_ERROR } from './error.types';

const initialState: ErrorState = {
    message: '',
    code: '',
    showNotification: false,
};

export default function errorReducer(state: ErrorState = initialState, action: ErrorActionTypes) {
    if (action.type === SET_ERROR) {
        return {
            ...state,
            ...action.payload,
        };
    }

    return state;
}
