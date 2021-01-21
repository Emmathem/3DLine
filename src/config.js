export const APP_BASE_URL = "https://covidnigeria.herokuapp.com/";

export const ApiEndPoints = {
  GET_ALL_DATA: "api",
};

export const LOGGER = (key, value) => {
  console.log(key.toUpperCase(), value);
};

export const HANDLE_ERROR = (errorMessage) => {
  return {
    data: null,
    message: errorMessage,
    status: "400",
  };
};
