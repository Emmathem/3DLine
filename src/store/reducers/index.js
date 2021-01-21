import { combineReducers } from 'redux';
import GetAllCovidReducer from './GetAllCovidReducer';

export default combineReducers({
    covidData: GetAllCovidReducer,
})