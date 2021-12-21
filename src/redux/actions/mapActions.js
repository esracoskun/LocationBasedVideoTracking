import * as types from './actionTypes';

export function latitude(lat) {
  return {
    type: types.LATITUDE,
    lat
  };
}

export function longitude(long) {
  return {
    type: types.LONGITUDE,
    long
  };
}
