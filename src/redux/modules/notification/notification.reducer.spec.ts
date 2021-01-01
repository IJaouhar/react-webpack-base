// import notificationReducer, { NotificationState } from './notification.reducer';
// import { NotificationSeverity } from '../../../components/notification/notification.enums';
// import { AUTO_HIDE_NOTIFICATION_DURATION } from '../../../components/notification/notification.constants';
// import { NotificationActionTypes, SHOW, HIDE } from './notification.types';

// describe('Notification reducer', () => {
//     const initialState: NotificationState = {
//         open: false,
//         message: null,
//         severity: NotificationSeverity.info,
//         autoHideDuration: AUTO_HIDE_NOTIFICATION_DURATION,
//     };

//     it('should handle SHOW', () => {
//         const message = 'fake message';

//         const action: NotificationActionTypes = {
//             type: SHOW,
//             payload: {
//                 message,
//             },
//         };

//         expect(notificationReducer(undefined, action)).toEqual({
//             ...initialState,
//             open: true,
//             message,
//         });
//     });

//     it('should handle HIDE', () => {
//         const action: NotificationActionTypes = {
//             type: HIDE,
//         };

//         expect(notificationReducer(undefined, action)).toEqual({
//             ...initialState,
//             open: false,
//             message: null,
//         });
//     });
// });
