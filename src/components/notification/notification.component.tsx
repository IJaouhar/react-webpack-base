import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AUTO_HIDE_NOTIFICATION_DURATION } from './notification.constants';
import { NotificationSeverity } from './notification.enums';

export interface NotificationProps {
    open: boolean;
    message: string;
    severity?: NotificationSeverity;
    autoHideDuration?: number;
    onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
    open,
    message,
    severity = NotificationSeverity.success,
    autoHideDuration = AUTO_HIDE_NOTIFICATION_DURATION,
    onClose,
}) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <Snackbar open={isOpen} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {i18n.exists(message) ? t(message) : message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
