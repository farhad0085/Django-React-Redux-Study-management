import axios from 'axios'
import * as Types from './actionTypes'


export const createCourse = (courseData) => dispatch => {
    
    axios.post("http://127.0.0.1:8000/api/courses/", courseData)
        .then(res => {
            dispatch({type: Types.COURSE_CREATED, payload: res.data })
        })
        .catch(error => {
            dispatch({type: Types.COURSE_CREATE_ERROR, payload: error.response.data })
        })
}

export const getCourse = (courseId) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`)
    .then(res => {
        dispatch({type: Types.COURSE_DATA_LOADED, payload: res.data })
    })
    .catch(error => {
        dispatch({type: Types.COURSE_DATA_LOAD_ERROR, payload: error.response.data })
    })
}


export const getAllCourse = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/courses/')
    .then(res => {
        dispatch({type: Types.COURSE_DATA_LOADED, payload: res.data })
    })
    .catch(error => {
        dispatch({type: Types.COURSE_DATA_LOAD_ERROR, payload: error.response.data })
    })
}