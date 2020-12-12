import * as Types from '../actions/actionTypes'

const initialState = {
    data: {},
    errors: {},
    created: false
}

function courseReducer(state = initialState, action) {
    switch (action.type) {
        case Types.COURSE_CREATED: {
            return {
                ...state,
                created: true,
                data: action.payload,
                errors: {}
            }
        }
        case Types.COURSE_CREATE_ERROR: {
            return {
                ...state,
                created: false,
                errors: action.payload
            }
        }
        default: return state
    }
}

export default courseReducer