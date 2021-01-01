// import { ActionsObservable } from 'redux-observable';
// import settingsActions from '../../redux/modules/pl3/settings/settings.actions';
// import spinnerActions from '../../redux/modules/spinner/spinner.actions';
// import { endSpinnerEpic, startSpinnerEpic } from './spinner.epics';

// describe('spinner epics', () => {
//     describe('startSpinnerEpic', () => {
//         it('should dispatch start', async () => {
//             const file: File = new File(['test'], 'test.csv');
//             const action$ = ActionsObservable.of(settingsActions.uploadCalendar(file));
//             const epic$ = startSpinnerEpic(action$);

//             const result = await epic$.toPromise();

//             expect(result).toEqual(spinnerActions.start());
//         });
//     });

//     describe('endSpinnerEpic', () => {
//         const action$ = ActionsObservable.of(settingsActions.uploadCalendarSuccess());

//         it('should dispatch end', async () => {
//             const epic$ = endSpinnerEpic(action$);

//             const result = await epic$.toPromise();

//             expect(result).toEqual(spinnerActions.end());
//         });
//     });
// });
