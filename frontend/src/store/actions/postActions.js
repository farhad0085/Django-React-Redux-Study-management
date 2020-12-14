import axios from '../../utils/axios'
import * as Types from './actionTypes'
import { getHeaders } from "../../utils/index";

export const getAllPosts = (filters) => dispatch => {

    let filter = "?"

    if(filters){
        if(filters.course){
            filter += `course=${filters.course}&`
        }
        if(filters.semester){
            filter += `semester=${filters.semester}&`
        }
    }

    axios.get(`/posts/${filter}`)
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
    })
}

export const createPost = (postData) => dispatch => {
    
    axios.post("/posts/", postData, {headers: getHeaders()})
        .then(res => {
            dispatch({type: Types.POST_CREATED, payload: res.data })
        })
        .catch(error => {
            console.log(error.response.data);
            dispatch({type: Types.POST_CREATE_ERROR, payload: error.response.data })
        })
}