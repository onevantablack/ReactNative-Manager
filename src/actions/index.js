import firebase from 'firebase';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGGING_USER
} from './types';

export const emailChanged_action = (text) => {
    //console.log('action1' + text)
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged_action = (text) => {
    //console.log('action2')
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser_action = ( email, password ) => {
    //console.log("action loginUser_action :" + email + ":" + password)
    return (dispatch) => {   // return function using redux thunk for async action instead of usual sync action
       dispatch({type: LOGGING_USER });
       
        firebase.auth().signInWithEmailAndPassword(email, password )
            .then(user => loginUserSuccess(dispatch, user)) // wait till action completes then dispatch
            .catch((error) => {
                console.log('Firebase error: ' + error)
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL});
};