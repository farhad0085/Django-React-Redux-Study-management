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
                errors: {}
            }
        }
        case Types.COURSE_DATA_LOADED: {
            return {
                ...state,
                created: false,
                errors: {},
                data: action.payload
            }
        }
        case Types.COURSE_DATA_LOAD_ERROR: {
            return {
                ...state,
                created: false,
                errors: action.payload,
                data: {}
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