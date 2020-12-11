import * as Types from '../actions/actionTypes'

const initialState = {
    
}

function semesterReducer(state = initialState, action) {
    switch (action.type) {
        case Types.ALL_SEMESTER_DATA_LOADED: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: return state
    }
}

export default semesterReducer