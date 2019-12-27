import {combineReducers} from 'redux'
import trendReducer from './trend'

export default combineReducers({
	trend: trendReducer
})
