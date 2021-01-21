import {
  GET_ALL_COVID_DATA_SUCCESS,
  GET_ALL_COVID_DATA_FAILED,
  GET_ALL_COVID_DATA,
} from '../Constants';
import { SERVER_REQUEST } from '../../connection/Backend';
import { ApiEndPoints, LOGGER } from '../../config';

export const getAllCovid19Data = () => async dispatch => {
  dispatch({ type: GET_ALL_COVID_DATA });
  const response = await SERVER_REQUEST(ApiEndPoints.GET_ALL_DATA, 'get', null);
  LOGGER('response', response);
  if (response.status === 200) {
    LOGGER('response', response.data);
    dispatch({ type: GET_ALL_COVID_DATA_SUCCESS, data: response.data });
  } else {
    dispatch({ type: GET_ALL_COVID_DATA_FAILED, message: response.message });
  }
};
