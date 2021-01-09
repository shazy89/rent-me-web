import { combineReducers } from 'redux';
import cars from './carsReducer'
import dates from './dateReducer'

export default combineReducers({
    cars,
    dates
})