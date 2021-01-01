import { SHOW, HIDE, NotificationActionTypes } from './notification.types';
import { NotificationSeverity } from '../../../components/notification/notification.enums';

const notificationActions = {
    show: (message: string, severity?: NotificationSeverity, autoHideDuration?: number): NotificationActionTypes => ({
        type: SHOW,
        payload: {
            message,
            severity,
            autoHideDuration,
        },
    }),
    hide: (): NotificationActionTypes => ({
        type: HIDE,
    }),
};

export default notificationActions;
