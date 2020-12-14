import axios from '../../utils/axios'
import * as Types from './actionTypes'


export const getAllPosts = () => dispatch => {
    axios.get('/posts/')
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
    })
}