import {GET_ALL_COVID_DATA} from '../Constants';
import {SERVER_REQUEST} from '../../connection/Backend';
import {ApiEndPoints} from '../../config';

export const getAllCovid19Data = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndPoints.GET_ALL_COVID_DATA, 'get');
    if (response) {
        dispatch({type: GET_ALL_COVID_DATA, data: response.data})
    }
}