import {ActionType} from './actionTypes';
import axios from '../../axios-apartments';

export const fetchApartmentsStart = () => {
  return {
    type: ActionType.FETCH_APARTMENTS_START,
  };
};

export const fetchApartmentsSuccess = (apartments) => {
  return {
    type: ActionType.FETCH_APARTMENTS_SUCCESS,
    payload: apartments,
  };
};

export const fetchApartmentsFail = (error) => {
  return {
    type: ActionType.FETCH_APARTMENTS_FAIL,
    payload: error,
  };
};

export const fetchApartments = () => {
  return dispatch => {
    dispatch(fetchApartmentsStart());
    axios.get('/response.json')
      .then((response) => {
        dispatch(fetchApartmentsSuccess(response.data));
      })
      .catch((error) =>{
        dispatch(fetchApartmentsFail(error));
      });
  };
};