import axios from 'axios';
import { SAVE_TOKEN } from '../../connection/Storage';

export const LoginMailTMAction = data => dispatch => {
  return axios
    .post(`https://api.mail.tm/token`, data, {
      headers: {
        // 'Content-Type': 'application/json',
      },
    })
    .then(response => {
      dispatch({ type: 'GET_STATES_BY_COUNTRY', payload: response.data.data });
      SAVE_TOKEN(response.data.token);
      return { success: true, message: response?.data?.details };
    })
    .catch(err => {
      return { success: false, message: err?.response?.data?.message };
    });
};
