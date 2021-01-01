// import errorReducer from './error.reducer';
// import { ErrorActionTypes, ErrorState, SET_ERROR } from './error.types';

// describe('Error reducer', () => {
//     const initialState: ErrorState = {
//         message: '',
//         code: '',
//         showNotification: false,
//     };

//     it('should handle SET', () => {
//         const error = { message: 'error message', code: 404, showNotification: true };

//         const action: ErrorActionTypes = {
//             type: SET_ERROR,
//             payload: error,
//         };

//         expect(errorReducer(initialState, action)).toEqual({
//             ...initialState,
//             ...error,
//         });
//     });
// });
