import axios from '../../utils/axios'
import * as Types from './actionTypes'


export const loadSemesters = () => dispatch => {
    
    axios.get("/semesters/")
        .then(res => {
            dispatch({type: Types.ALL_SEMESTER_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.ALL_SEMESTER_DATA_ERROR, payload: error.response.data })
        })
}