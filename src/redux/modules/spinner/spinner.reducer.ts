import { SpinnerActionTypes, START, END, END_ALL } from './spinner.types';

export interface SpinnerState {
    loading: boolean;
    count: number;
}

const initialState: SpinnerState = {
    loading: false,
    count: 0,
};

export default function spinnerReducer(state: SpinnerState = initialState, action: SpinnerActionTypes): SpinnerState {
    switch (action.type) {
        case START:
            return {
                loading: true,
                count: state.count + 1,
            };
        case END: {
            const count = state.count - 1;
            return {
                loading: count > 0,
                count,
            };
        }

        case END_ALL:
            return {
                loading: false,
                count: 0,
            };
        default:
            return state;
    }
}
