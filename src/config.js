export const APP_BASE_URL = '';

export const ApiEndPoints = {
    GET_ALL_DATA: '',
};

export const LOGGER = (key, value) => {
    console.log(key.upperCase(), value);
}

export const HANDLE_ERROR = (errorMessage) => {
    return {
        data: null,
        message: errorMessage,
        status: '400'
    }
}