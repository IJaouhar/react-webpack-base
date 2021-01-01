// import { END, END_ALL, SpinnerActionTypes, START } from './spinner.types';
// import spinnerReducer, { SpinnerState } from './spinner.reducer';

// describe('Spinner reducer', () => {
//     it('should handle START', () => {
//         const action: SpinnerActionTypes = {
//             type: START,
//         };

//         expect(spinnerReducer(undefined, action)).toEqual({ loading: true, count: 1 });
//     });

//     it('should handle END', () => {
//         const action: SpinnerActionTypes = {
//             type: END,
//         };

//         expect(spinnerReducer({ loading: true, count: 1 }, action)).toEqual({ loading: false, count: 0 });
//         expect(spinnerReducer({ loading: true, count: 3 }, action)).toEqual({ loading: true, count: 2 });
//     });

//     it('should handle END_ALL', () => {
//         const action: SpinnerActionTypes = {
//             type: END_ALL,
//         };

//         const expectedState: SpinnerState = { loading: false, count: 0 };

//         expect(spinnerReducer({ loading: true, count: 1 }, action)).toEqual(expectedState);
//         expect(spinnerReducer({ loading: true, count: 5 }, action)).toEqual(expectedState);
//     });
// });
