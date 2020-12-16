import * as Types from '../actions/actionTypes'

const initialState = {
    data: [],
    loading: true
}

function semesterReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SEMESTER_DATA_LOADED: {
            return {
                ...state,
                data: action.payload
            }
        }
        case Types.SEMESTER_DATA_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: return state
    }
}

export default semesterReducer