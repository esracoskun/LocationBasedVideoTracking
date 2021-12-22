import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

export function* handleApiRequest(action) {
  console.log(action)
  try {
    // Enter your own API KEY in the [YOTUBE_API_KEY] field
    const apiConfig = {
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${action.payload.maps.latitude+'%2C'+action.payload.maps.longitude}&locationRadius=10km&maxResults=${action.payload.max_result}&type=video&key=[YOUR_YOUTUBE_API_KEY]`,
    };

    const response = yield call(axios, apiConfig);
    yield put({type: 'API_REQUEST_SUCCEEDED', payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchApiRequest() {
  yield takeEvery('API_REQUEST', handleApiRequest);
}
