/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_COVID_DATA_SUCCESS,
  GET_ALL_COVID_DATA_FAILED,
} from '../Constants';

const initialState = {
  covidData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COVID_DATA_SUCCESS:
      console.log('data reducer', action.data);
      return { ...state, loading: false, covidData: action.data.data };
    case GET_ALL_COVID_DATA_FAILED:
      return { ...state, loading: true, message: action.message };
    default:
      return state;
  }
};
