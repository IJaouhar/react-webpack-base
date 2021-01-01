import { ErrorActionTypes, SET_ERROR, ErrorState } from './error.types';

const errorActions = {
    set: (error: ErrorState): ErrorActionTypes => ({
        type: SET_ERROR,
        payload: error,
    }),
};

export default errorActions;
