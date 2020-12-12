import axios from 'axios'
import * as Types from './actionTypes'
import { getHeaders} from '../../utils'


export const login = (loginCreds, history) => dispatch => {
    axios.post("http://127.0.0.1:8000/api/auth/login/", loginCreds)
        .then(res => {
            localStorage.setItem("userToken", res.data.key)
            dispatch({type: Types.USER_LOGGED_IN })
            history.push("/")
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGIN_ERROR, payload: error.response.data })
        })
}

export const logout = () => dispatch => {
    
    axios.post("http://127.0.0.1:8000/api/auth/logout/", {headers: getHeaders()})
        .then(res => {
            localStorage.removeItem("userToken")
            dispatch({type: Types.USER_LOGGED_OUT })
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGOUT_ERROR, payload: error.response.data })
        })
}