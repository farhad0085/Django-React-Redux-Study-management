import axios from '../../utils/axios'
import * as Types from './actionTypes'
import { getHeaders} from '../../utils'


export const login = (loginCreds, history) => dispatch => {
    dispatch({type: Types.AUTH_LOADING, payload: true})
    dispatch({type: Types.USER_LOGIN_ERROR, payload: {}})
    axios.post("/auth/login/", loginCreds)
        .then(res => {
            localStorage.setItem("userToken", res.data.key)
            dispatch({type: Types.USER_LOGGED_IN })
            history.push("/")
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGIN_ERROR, payload: error.response.data })
            dispatch({type: Types.AUTH_LOADING, payload: false})
        })
}

export const logout = () => dispatch => {
    dispatch({type: Types.AUTH_LOADING, payload: true})
    
    axios.post("/auth/logout/", {headers: getHeaders()})
        .then(res => {
            localStorage.removeItem("userToken")
            dispatch({type: Types.AUTH_LOADING, payload: true})
            dispatch({type: Types.USER_LOGGED_OUT })
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGOUT_ERROR, payload: error.response.data })
            dispatch({type: Types.AUTH_LOADING, payload: true})
        })
}


export const resetPasswordRequest = (email) => dispatch => {
    dispatch({type: Types.AUTH_LOADING, payload: true})
    dispatch({type: Types.FORGET_PASSWORD_RESET_EMAIL_SENT, payload: false})
    dispatch({type: Types.USER_LOGIN_ERROR, payload: {}})

    axios.post("/auth/password/reset/", {email})
    .then(res => {
        dispatch({type: Types.AUTH_LOADING, payload: false})
        dispatch({type: Types.FORGET_PASSWORD_RESET_EMAIL_SENT, payload: true})
    })
    .catch(error => {
        dispatch({type: Types.AUTH_LOADING, payload: false})
    })

}

export const resetPassword = (token, uid, new_password1, new_password2) => dispatch => {
    dispatch({type: Types.AUTH_LOADING, payload: true})

    axios.post("/auth/password/reset/", {new_password1, new_password2, uid, token})
    .then(res => {
        console.log(res.data);
        dispatch({type: Types.AUTH_LOADING, payload: false})
    })
    .catch(error => {
        console.log(error.response.data);
        dispatch({type: Types.AUTH_LOADING, payload: false})
    })
}