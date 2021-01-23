export const APP_BASE_URL = 'https://covidnigeria.herokuapp.com/';

export const ApiEndPoints = {
  GET_ALL_DATA: 'api',
};

// eslint-disable-next-line no-unused-vars
export const LOGGER = (key, value) => {
  console.log(key.toUpperCase(), value);
};

export const HANDLE_ERROR = errorMessage => {
  return {
    data: null,
    message: errorMessage,
    status: '400',
  };
};

export const formatNumber = num => {
  if (!num) {
    return;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
