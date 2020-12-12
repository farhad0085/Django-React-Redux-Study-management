import axios from 'axios'
import * as Types from './actionTypes'


export const createCourse = (courseData) => dispatch => {
    
    axios.post("http://127.0.0.1:8000/api/courses/", courseData)
        .then(res => {
            dispatch({type: Types.COURSE_CREATED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.COURSE_CREATE_ERROR, payload: error.response.data })
        })
}