import { combineReducers } from 'redux'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import postReducer from './postReducer'
import semesterReducer from './semesterReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    semester: semesterReducer,
    course: courseReducer,
    post: postReducer
})

export default rootReducer