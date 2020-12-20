import * as Types from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
    loginErrors: {},
    resetPasswordErrors: {},
    loading: false,
    passwordResetEmailSent: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case Types.USER_LOGGED_IN: {
            return {
                isAuthenticated: true,
                loginErrors: {},
                loading: false
            }
        }
        case Types.AUTH_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case Types.FORGET_PASSWORD_RESET_EMAIL_SENT: {
            return {
                ...state,
                passwordResetEmailSent: action.payload
            }
        }
        case Types.USER_LOGIN_ERROR: {
            return {
                ...state,
                isAuthenticated: false,
                loginErrors: action.payload
            }
        }
        case Types.USER_LOGGED_OUT: {
            return {
                loginErrors: {},
                loading: false,
                isAuthenticated: false
            }
        }
        default: return state
    }
}

export default authReducer