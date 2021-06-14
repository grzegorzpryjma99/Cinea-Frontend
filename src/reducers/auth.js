const SIGNIN = 'SIGNIN';

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
            default:
                return state;
    }
}

export default auth;