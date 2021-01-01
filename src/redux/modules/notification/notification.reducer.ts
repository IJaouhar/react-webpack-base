import { NotificationActionTypes, SHOW, HIDE } from './notification.types';
import { NotificationSeverity } from '../../../components/notification/notification.enums';
import { AUTO_HIDE_NOTIFICATION_DURATION } from '../../../components/notification/notification.constants';

const INITIAL_STATE: NotificationState = {
    open: false,
    message: null,
    severity: NotificationSeverity.info,
    autoHideDuration: AUTO_HIDE_NOTIFICATION_DURATION,
};

export interface NotificationState {
    open: boolean;
    message: string;
    severity: NotificationSeverity;
    autoHideDuration: number;
}

export default function notificationReducer(
    state: NotificationState = INITIAL_STATE,
    action: NotificationActionTypes,
): NotificationState {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                ...action.payload,
                open: true,
            };
        case HIDE:
            return {
                ...state,
                open: false,
                message: null,
            };
        default:
            return state;
    }
}
