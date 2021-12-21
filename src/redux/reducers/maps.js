import * as types from '../actions/actionTypes';

const initialState = {
  latitude: 41.0391683,
  longitude: 28.9982707,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function maps(state = initialState, action = {}) {
  switch (action.type) {
    case types.LATITUDE:
      return {
        ...state,
        latitude: action.lat,
      };
    case types.LONGITUDE:
      return {
        ...state,
        longitude: action.long
      };
    default:
      return state;
  }
}
