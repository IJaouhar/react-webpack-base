import { NotificationSeverity } from './notification.enums';

export interface Notification {
    message: string;
    severity?: NotificationSeverity;
    autoHideDuration?: number;
}
