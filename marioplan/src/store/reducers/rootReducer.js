import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const initState = {}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer
