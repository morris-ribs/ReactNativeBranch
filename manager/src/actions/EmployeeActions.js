import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }    
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  
  // persist the new user to the DB
  // the feather function is just to circumvent redux-thunk rules
  return (dispatch) =>  {
    console.ignoredYellowBox = ['Setting a timer'];
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  
  return (dispatch) => {
    // for anything coming from the ref, call a function with a snapshot parameter
    // representing a handle on the employees
    console.ignoredYellowBox = ['Setting a timer'];
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        // snapshot.val() has the current employee data
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  
  // persist the new user to the DB
  // the feather function is just to circumvent redux-thunk rules
  return (dispatch) =>  {
    console.ignoredYellowBox = ['Setting a timer'];
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
   return () =>  {
    console.ignoredYellowBox = ['Setting a timer'];
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {Actions.employeeList({ type: 'reset' });
    });
  };
}