import axios from 'axios';
import { SAVE_TOKEN, GET_TOKEN } from '../../connection/Storage';
import { GET_TM_EMAILS, GET_TM_EMAILS_TOTAL } from '../Constants';

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

export const GetAllMails = payload => dispatch => {
  console.log(payload);
  return axios
    .get(`https://api.mail.tm/messages`, {
      headers: {
        'Content-Type': 'application/ld+json; charset=utf-8',
        Authorization: `Bearer ${GET_TOKEN()}`,
      },
      // params: {
      //   ...payload,
      // },
    })
    .then(response => {
      dispatch({ type: GET_TM_EMAILS, payload: response.data['hydra:member'] });
      dispatch({
        type: GET_TM_EMAILS_TOTAL,
        payload: response.data['hydra:totalItems'],
      });
      return { success: true, message: response?.data?.details };
    })
    .catch(err => {
      return { success: false, message: err?.response?.data?.message };
    });
};

export const DeleteSingleMail = mail_id => dispatch => {
  return axios
    .delete(`https://api.mail.tm/messages/${mail_id}`, {
      headers: {
        'Content-Type': 'application/ld+json; charset=utf-8',
        Authorization: `Bearer ${GET_TOKEN()}`,
      },
    })
    .then(response => {
      dispatch({ type: '' });
      return { success: true, message: response?.data?.details };
    })
    .catch(err => {
      return { success: false, message: err?.response?.data?.message };
    });
};
