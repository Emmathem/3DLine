import {
  GET_ALL_COVID_DATA_SUCCESS,
  GET_ALL_COVID_DATA_FAILED,
  GET_ALL_COVID_DATA,
  GET_STATES_BY_COUNTRY,
  GET_STATES_BY_COUNTRY_FAILED,
} from '../Constants';
import { SERVER_REQUEST } from '../../connection/Backend';
import { ApiEndPoints, LOGGER } from '../../config';
import axios from 'axios';

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

export const GetStatesByCountry = countryCode => async dispatch => {
  const response = await SERVER_REQUEST(
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
    'get',
    null
  );
  if (response.status === 200) {
    dispatch({ type: GET_STATES_BY_COUNTRY, payload: response.data });
  } else {
    dispatch({ type: GET_STATES_BY_COUNTRY_FAILED, message: response.message });
  }
};

// export const GetStatesByCountry2 = countryCode => async dispatch => {
//   const response = await SERVER_REQUEST(
//     `https://countriesnow.space/api/v0.1/countries/states`,
//     'post',
//     {
//       country: countryCode,
//     }
//   );
//   if (response.status === 200) {
//     dispatch({ type: GET_STATES_BY_COUNTRY, payload: response.data });
//   } else {
//     dispatch({ type: GET_STATES_BY_COUNTRY_FAILED, message: response.message });
//   }
// };

export const GetStatesByCountry2 = countryName => dispatch => {
  return axios
    .post(
      `https://countriesnow.space/api/v0.1/countries/states`,
      {
        country: countryName,
      },
      {
        headers: {
          // 'Content-Type': 'application/json',
        },
      }
    )
    .then(response => {
      dispatch({ type: GET_STATES_BY_COUNTRY, payload: response.data.data });
      return { success: true, message: response?.data?.details };
    })
    .catch(err => {
      return { success: false, message: err?.response?.data?.msg };
    });
};
