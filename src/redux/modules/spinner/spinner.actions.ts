import { END, END_ALL, SpinnerActionTypes, START } from './spinner.types';

const spinnerActions = {
    start: (): SpinnerActionTypes => ({
        type: START,
    }),
    end: (): SpinnerActionTypes => ({
        type: END,
    }),
    endAll: (): SpinnerActionTypes => ({
        type: END_ALL,
    }),
};

export default spinnerActions;
