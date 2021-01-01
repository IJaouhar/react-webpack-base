import { Notification } from '../../../components/notification/notification.types';

export const SHOW = 'SHOW_NOTIFICATION';
export const HIDE = 'HIDE_NOTIFICATION';

interface ShowAction {
    type: typeof SHOW;
    payload: Notification;
}

interface HideAction {
    type: typeof HIDE;
}

export type NotificationActionTypes = ShowAction | HideAction;
