import axios from '../../utils/axios'
import * as Types from './actionTypes'
import { getHeaders} from '../../utils'


export const login = (loginCreds, history) => dispatch => {
    dispatch({type: Types.USER_LOGIN_LOADING, payload: true})
    dispatch({type: Types.USER_LOGIN_ERROR, payload: {}})
    axios.post("/auth/login/", loginCreds)
        .then(res => {
            localStorage.setItem("userToken", res.data.key)
            dispatch({type: Types.USER_LOGGED_IN })
            history.push("/")
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGIN_ERROR, payload: error.response.data })
            dispatch({type: Types.USER_LOGIN_LOADING, payload: false})
        })
}

export const logout = () => dispatch => {
    
    axios.post("/auth/logout/", {headers: getHeaders()})
        .then(res => {
            localStorage.removeItem("userToken")
            dispatch({type: Types.USER_LOGGED_OUT })
        })
        .catch(error => {
            dispatch({type: Types.USER_LOGOUT_ERROR, payload: error.response.data })
        })
}