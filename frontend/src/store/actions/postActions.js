import axios from '../../utils/axios'
import * as Types from './actionTypes'
import { getHeaders } from "../../utils/index";

export const getAllPosts = (filters) => dispatch => {
    
    dispatch({type: Types.POST_DATA_LOADING, payload: true})
    dispatch({type: Types.POST_CREATED, payload: false })

    const filter = removeEndSign(buildFilter(filters))

    axios.get(`/posts/${filter}`)
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })

}

export const createPost = (postData) => dispatch => {
    dispatch({type: Types.POST_CREATE_LOADING, payload: true })
    dispatch({type: Types.POST_CREATED, payload: false })
    
    axios.post("/posts/", postData, {headers: getHeaders()})
        .then(res => {
            dispatch({type: Types.POST_CREATED, payload: res.data })
            dispatch({type: Types.POST_CREATE_LOADING, payload: false })
        })
        .catch(error => {
            dispatch({type: Types.POST_CREATE_ERROR, payload: error.response.data })
            dispatch({type: Types.POST_CREATE_LOADING, payload: false })
        })
}


export const loadPage = (filters, page="next") => (dispatch, getState) => {
    dispatch({type: Types.POST_DATA_LOADING, payload: true})
    dispatch({type: Types.POST_CREATED, payload: false })

    const prevState = getState().post

    const filter = removeEndSign(buildFilter(filters))

    axios.get(`${prevState[page]}${filter}`)
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })

}


function buildFilter(filters){
    let filter = "?"

    if(filters){
        if(filters.course){
            filter += `course=${filters.course}&`
        }
        if(filters.semester){
            filter += `semester=${filters.semester}&`
        }
    }
    return filter
}

function removeEndSign(url){
    const lastChar = url.charAt(url.length-1)
    if(lastChar === '?' || lastChar === '&'){
        url = url.slice(0, url.length-1);
    }
    return url;
}