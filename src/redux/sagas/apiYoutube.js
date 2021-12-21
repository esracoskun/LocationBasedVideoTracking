import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

export function* handleApiRequest(action) {
  console.log(action)
  try {
    const apiConfig = {
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${action.payload.maps.latitude+'%2C'+action.payload.maps.longitude}&locationRadius=10km&maxResults=${action.payload.max_result}&q=song&type=video&key=AIzaSyAcdzZhXi4PAppXDGu4-08IcNspbkSKAKQ`,
      // data: {
      //   section_id: action.payload.section_id
      // }
    };

    const response = yield call(axios, apiConfig);
    console.log(response);
    yield put({type: 'API_REQUEST_SUCCEEDED', payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchApiRequest() {
  yield takeEvery('API_REQUEST', handleApiRequest);
}
