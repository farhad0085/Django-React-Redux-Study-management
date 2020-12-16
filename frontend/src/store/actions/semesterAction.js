import axios from '../../utils/axios'
import * as Types from './actionTypes'


export const loadSemesters = () => dispatch => {
    dispatch({type: Types.SEMESTER_DATA_LOADING, payload: true })
    
    axios.get("/semesters/")
        .then(res => {
            dispatch({type: Types.SEMESTER_DATA_LOADED, payload: res.data })
            dispatch({type: Types.SEMESTER_DATA_LOADING, payload: false })
        })
        .catch(error => {
            dispatch({type: Types.SEMESTER_DATA_ERROR, payload: error.response.data })
            dispatch({type: Types.SEMESTER_DATA_LOADING, payload: false })
        })
}