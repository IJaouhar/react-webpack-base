import { Action } from 'redux';
import { combineEpics, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { SET_ERROR } from '../../redux/modules/error/error.types';
import spinnerActions from '../../redux/modules/spinner/spinner.actions';

export const endSpinnerEpic = (action$: Observable<Action>): Observable<Action> => {
    return action$.pipe(
        ofType<Action<typeof SET_ERROR>>(
            SET_ERROR,
        ),
        mapTo(spinnerActions.end()),
    );
};

export default combineEpics(endSpinnerEpic);
