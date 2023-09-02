/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_COVID_DATA_SUCCESS,
  GET_ALL_COVID_DATA_FAILED,
  GET_STATES_BY_COUNTRY_FAILED,
  GET_STATES_BY_COUNTRY,
} from '../Constants';
import { LOGGER } from '../../config';

const initialState = {
  covidData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COVID_DATA_SUCCESS:
      LOGGER('data reducer', action.data);
      return { ...state, covidData: action.data.data };
    case GET_ALL_COVID_DATA_FAILED:
      return { ...state, message: action.message };
    case GET_STATES_BY_COUNTRY_FAILED:
      return {
        ...state,
        message: action.message,
      };
    case GET_STATES_BY_COUNTRY:
      return {
        ...state,
        stateData: action.payload,
      };
    default:
      return state;
  }
};
