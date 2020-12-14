import axios from '../../utils/axios'
import * as Types from './actionTypes'


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