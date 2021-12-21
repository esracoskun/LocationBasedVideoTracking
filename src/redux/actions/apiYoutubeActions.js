import * as types from './actionTypes';

export function apiRequest(payload) {
  return {
    type: types.API_REQUEST,
    payload: payload
  }
}

export function apiRequestSucceeded(payload) {
  return {
    type: types.API_REQUEST_SUCCEEDED,
    payload: payload
  }
}

export function apiRequestFailed(payload) {
  return {
    type: types.API_REQUEST_FAILED,
    payload: payload
  }
}

export function modalVisible(payload) {
  return {
    type: types.MODAL_VISIBLE,
    payload: payload,
  }
}
