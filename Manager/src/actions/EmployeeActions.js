import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_RESET,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_LOADING
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        dispatch({type: EMPLOYEE_LOADING});

        firebase.database().ref(`/users/${currentUser.uid}/employees`) //Note the back ticks
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_RESET })
                Actions.pop();
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                Actions.pop();
            });
    };
};

export const employeeFormReset = () => {
    return (dispatch) => dispatch({
        type: EMPLOYEE_RESET
    });
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.pop();
            });
    };
};