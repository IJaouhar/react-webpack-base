// import { getErrorMessageByActionType } from './error.selectors';
// import { AppState } from '../../store';
// import { stubState } from '../../store.stub';
// import { GET_LOADS, UPDATE_LOAD } from '../pl3/loads/loads.types';

// describe('Error Selectors', () => {
//     describe('getErrorMessageByActionType', () => {
//         const errorMessage = 'Error message';

//         const mockState: AppState = {
//             ...stubState,
//             error: {
//                 message: errorMessage,
//                 actionType: GET_LOADS,
//             },
//         };

//         it('should get error message when action type', () => {
//             expect(getErrorMessageByActionType(mockState)(GET_LOADS)).toBe(errorMessage);
//         });

//         it('should get error message empty when action type doesn´t match', () => {
//             expect(getErrorMessageByActionType(mockState)(UPDATE_LOAD)).toBe('');
//         });
//     });
// });
