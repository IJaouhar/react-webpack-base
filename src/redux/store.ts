import { createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-cycle
import rootEpic from '../epics';
import createRootReducer from './modules';

const epicMiddleware = createEpicMiddleware<Action<any>, Action<any>, any>();
export const history = createBrowserHistory();

const composedEnhancers = composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history)));

const rootReducer = createRootReducer(history);

const store = createStore(rootReducer, composedEnhancers);

epicMiddleware.run(rootEpic);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
