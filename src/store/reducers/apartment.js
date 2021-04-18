import {updateObject} from '../../utils/common';
import {ActionType} from '../actions/actionTypes';

const initialState = {
  apartments: [],
  loading: false,
  error: null,
};

const fetchApartmentsStart = (state) => {
  return updateObject(state, {loading: true});
};

const fetchApartmentsSuccess = (state, action) => {
  return updateObject(state, {
    apartments: action.payload,
    loading: false,
  });
};

const fetchApartmentsFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload.message,
  });
};

const apartment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_APARTMENTS_START: return fetchApartmentsStart(state, action);
    case ActionType.FETCH_APARTMENTS_SUCCESS: return fetchApartmentsSuccess(state, action);
    case ActionType.FETCH_APARTMENTS_FAIL: return fetchApartmentsFail(state, action);
    default: return state;
  }
};

export default apartment;