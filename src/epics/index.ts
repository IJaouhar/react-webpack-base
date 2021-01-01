/* eslint-disable import/no-cycle */
import { combineEpics } from 'redux-observable';

import spinnerEpics from './spinner/spinner.epics';

const rootEpic = combineEpics(
    spinnerEpics,
);

export default rootEpic;
