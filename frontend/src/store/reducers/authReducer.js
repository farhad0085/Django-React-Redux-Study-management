import * as Types from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case Types.USER_LOGGED_IN: {
            return {
                isAuthenticated: true
            }
        }
        default: return state
    }
}

export default authReducer