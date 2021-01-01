import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ConnectedRouter } from 'connected-react-router';
import i18nextDefaultOpts from './config/localization';
import RouteLayoutContainer from './components/route-layout/route-layout.container';
import store, { history } from './redux/store';

i18next.use(initReactI18next).init(i18nextDefaultOpts);

ReactDOM.render(
    <Provider store={store}>
            <ConnectedRouter history={history}>
                <RouteLayoutContainer />
            </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);
