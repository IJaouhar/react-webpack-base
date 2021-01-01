import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import notificationReducer from './notification/notification.reducer';
import spinnerReducer from './spinner/spinner.reducer';
import errorReducer from './error/error.reducer';

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        notification: notificationReducer,
        error: errorReducer,
        spinner: spinnerReducer,
    });

export default createRootReducer;
