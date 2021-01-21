import {APP_BASE_URL, HANDLE_ERROR, LOGGER} from '../config';
import axios from 'axios';
import { GET_TOKEN } from './Storage';

export const GET_HEADER = () => {
  const token = GET_TOKEN();

  if (token) {
    return {
      'Content-Type': 'application/json',
      Authorization: token,
    };
  }
  return { 'Content-Type': 'application/json' };
};

export const SERVER_REQUEST = async (endpoint, type, body) => {
  try {
    const response =
      type.toLowerCase() === 'post'
        ? await axios.post(`${APP_BASE_URL}${endpoint}`, body, {
            headers: GET_HEADER(),
          })
        : await axios.get(`${APP_BASE_URL}${endpoint}`, {
            headers: GET_HEADER(),
          });
    if (response) {
      return response;
    }
  } catch (error) {
    LOGGER('error', HANDLE_ERROR(error));
    return HANDLE_ERROR(error.message);
  }
};
