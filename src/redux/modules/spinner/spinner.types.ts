export const START = 'SPINNER_START';
export const END = 'SPINNER_END';
export const END_ALL = 'SPINNER_END_ALL';

interface StartAction {
    type: typeof START;
}

interface EndAction {
    type: typeof END;
}

interface EndAllAction {
    type: typeof END_ALL;
}

export type SpinnerActionTypes = StartAction | EndAction | EndAllAction;
