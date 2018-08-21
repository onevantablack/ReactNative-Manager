import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED ,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGGING_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    loading: false,
    error: '',
};

export default (state= INITIAL_STATE, action) => {
    //console.log("STATE: " + state.email + state.password)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGGING_USER:
            return { ...state, loading: true, error: ''}
        case LOGIN_USER_SUCCESS:
            console.log("Login successfully")
            return { ...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            console.log("Failed")
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            //console.log("switch default")
            return state;
    }
};