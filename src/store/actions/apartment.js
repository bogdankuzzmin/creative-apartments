import axios from '../../axios-apartments';

import {ActionType} from './actionTypes';

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
        const data = response.data.map(item => {
          return {
            ...item,
            isLiked: JSON.parse(localStorage.getItem('like@' + item.id)),
          };
        });

        dispatch(fetchApartmentsSuccess(data));
      })
      .catch((error) =>{
        dispatch(fetchApartmentsFail(error));
      });
  };
};

export const updateApartment = (updatedApartment) => {
  return {
    type: ActionType.UPDATE_APARTMENT,
    payload: updatedApartment,
  };
};