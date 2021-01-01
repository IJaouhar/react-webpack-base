import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import APP_ROUTES from '../../config/app-routes';
import { AppState } from '../../redux/store';
import MainLayout from '../layout/main-layout/main-layout.component';
import Notification from '../notification/notification.component';
import Spinner from '../spinner/spinner.component';
import Routes from './routes/routes.component';
import { loadingSelector } from '../../redux/modules/spinner/spinner.selectors';
import notificationActions from '../../redux/modules/notification/notification.actions';

const RouteLayoutContainer: React.FC = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state: AppState) => state.notification);
    const loading = useSelector(loadingSelector);
    const { t } = useTranslation();

    const routes = APP_ROUTES;
    notification.message = t(notification.message);

    return (
        <Switch>
            <MainLayout routes={routes} >
                <Routes routes={routes} />
                <Spinner show={loading} />
                <Notification {...notification} onClose={() => dispatch(notificationActions.hide())} />
            </MainLayout>
        </Switch>
    );
};

export default RouteLayoutContainer;
