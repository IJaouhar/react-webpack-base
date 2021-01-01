// import { NotificationActionTypes, SHOW, HIDE } from './notification.types';
// import { NotificationSeverity } from '../../../components/notification/notification.enums';
// import notificationActions from './notification.actions';

// describe('Notification actions', () => {
//     it('should create show action', () => {
//         const message = 'this is a fake message';
//         const autoHideDuration = 5000;
//         const severity = NotificationSeverity.info;

//         const expectedAction: NotificationActionTypes = {
//             type: SHOW,
//             payload: {
//                 message,
//                 severity,
//                 autoHideDuration,
//             },
//         };

//         expect(notificationActions.show(message, severity, autoHideDuration)).toEqual(expectedAction);
//     });

//     it('should create hide action', () => {
//         const expectedAction: NotificationActionTypes = {
//             type: HIDE,
//         };

//         expect(notificationActions.hide()).toEqual(expectedAction);
//     });
// });
