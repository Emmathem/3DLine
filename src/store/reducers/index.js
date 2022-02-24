import { combineReducers } from 'redux';
import GetAllCovidReducer from './GetAllCovidReducer';
import MailTMReducers from './MailTMReducers';

export default combineReducers({
  covidData: GetAllCovidReducer,
  MailTMReducers: MailTMReducers,
});
