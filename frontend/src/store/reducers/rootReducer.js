import { combineReducers } from 'redux'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import semesterReducer from './semesterReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    semester: semesterReducer,
    course: courseReducer,
})

export default rootReducer