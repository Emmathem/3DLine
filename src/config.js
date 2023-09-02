export const APP_BASE_URL = 'https://covidnigeria.herokuapp.com/';
import moment from 'moment';

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

export const formatDateObjectHandler = (dateObj, format = 'YYYY-MM-DD') => {
  if (!dateObj) {
    return undefined;
  }
  if (!moment.isMoment(dateObj)) {
    return moment(dateObj).format(format);
  }
  return dateObj.format(format);
};

export const GetFromNowDate = (
  dateValue,
  stringFormat,
  fromNow,
  format = 'DD-MM-YYYY'
) => {
  if (moment(dateValue, stringFormat).isValid()) {
    if (fromNow) {
      return moment(dateValue).fromNow();
    }
    return moment(dateValue, stringFormat).format(format);
  }
  return '';
};
