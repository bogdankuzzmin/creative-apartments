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

const updateApartment = (state, action) => {
  const index = state.apartments.findIndex((apartmentIndex) => apartmentIndex.id === action.payload.id);

  if (index === -1) {
    throw new Error(`Can't update non-existent apartment`);
  }

  const newApartments = [
    ...state.apartments.slice(0, index),
    action.payload,
    ...state.apartments.slice(index + 1),
  ];

  return updateObject(state, {apartments: newApartments});
};

const apartment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_APARTMENTS_START: return fetchApartmentsStart(state, action);
    case ActionType.FETCH_APARTMENTS_SUCCESS: return fetchApartmentsSuccess(state, action);
    case ActionType.FETCH_APARTMENTS_FAIL: return fetchApartmentsFail(state, action);
    case ActionType.UPDATE_APARTMENT: return updateApartment(state, action);
    default: return state;
  }
};

export default apartment;