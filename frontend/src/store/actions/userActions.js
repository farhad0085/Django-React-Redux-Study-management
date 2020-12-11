import axios from 'axios'
import * as Types from './actionTypes'

export const loadUserProfileData = (username, history) => dispatch => {

    dispatch({type: Types.SET_LOADING, payload: true })

    axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            
            dispatch(loadUserRepoData(res.data.login))
            dispatch(loadUserGistData(res.data.login))
            dispatch(loadUserFollowersData(res.data.login))
            dispatch(loadUserFollowingsData(res.data.login))
            dispatch(loadUserGistData(res.data.login))


            dispatch({type: Types.USER_PROFILE_DATA_LOADED, payload: res.data })
            dispatch({type: Types.SET_LOADING, payload: false })
            history.push("/")
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
            dispatch({type: Types.SET_LOADING, payload: false })
        })
}


const loadUserRepoData = (username) => dispatch => {

    console.log("loadUserRepoData called", username);
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            dispatch({type: Types.USER_REPOS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}

const loadUserGistData = (username) => dispatch => {

    
    axios.get(`https://api.github.com/users/${username}/gists`)
        .then(res => {
            dispatch({type: Types.USER_GISTS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}


const loadUserFollowersData = (username) => dispatch => {

    
    axios.get(`https://api.github.com/users/${username}/followers`)
        .then(res => {
            dispatch({type: Types.USER_FOLLOWERS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}


const loadUserFollowingsData = (username) => dispatch => {

    
    axios.get(`https://api.github.com/users/${username}/following`)
        .then(res => {
            dispatch({type: Types.USER_FOLLOWINGS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}