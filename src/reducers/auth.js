import {
    SIGNIN, 
    SIGNUP, 
    SIGNIN_ERROR, 
    SIGNUP_ERROR, 
    SIGNUP_SUCCESS
} from './../actions/types';


const initialState = {
    login: false,
    login_error: false,
    register_error: false, 
    register_success: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                ...state, auth: action.payload, login: true, login_error: false
            }
        case SIGNIN_ERROR:
            return {
                ...state, login_error: true,
            }
        case SIGNUP:
            return {
                ...state
            }
        case SIGNUP_ERROR:
            return {
                ...state, register_error: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state, register_error: false
            }
        case 'LOGOUT':
            return {
                ...state, login: false
            }
            default:
                return state;
    }
}

export default auth;