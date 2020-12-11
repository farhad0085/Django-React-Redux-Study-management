import { combineReducers } from 'redux'
import authReducer from './authReducer'
import semesterReducer from './semesterReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    semester: semesterReducer,
})

export default rootReducer