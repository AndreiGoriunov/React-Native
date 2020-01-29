import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_RESET,
    EMPLOYEE_LOADING
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_RESET:
            return (INITIAL_STATE);
        case EMPLOYEE_LOADING:
            return { loading: true };
        default:
            return state;
    }
}