import * as types from '../actions/actionTypes';

const initialState = {
  apiMsg: '',
  modalVisible: false,
  data: [],
  pageinfo: {},
};

export default function apiTester(state = initialState, action = {}) {
  console.log(action)
  switch (action.type) {
    case types.API_REQUEST_SUCCEEDED:
      return {
        ...state,
        modalVisible: true,
        data: action.payload.items,
        pageinfo: action.payload.pageInfo,
        apiMsg: 'API called succeeded!',
      };
    case types.API_REQUEST_FAILED:
      return {
        ...state,
        modalVisible: false,
        apiMsg: 'API called failed!',
      };
    case types.MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload,
        loading: action.payload === true ? false : true
      }
    default:
      return state;
  }
}
