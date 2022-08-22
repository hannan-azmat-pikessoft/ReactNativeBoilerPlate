import axios from 'axios';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './slice';

function* HomeSaga() {
  try {
    const response = yield axios.get(
      `https://ptapi-staging.almanahospital.org/locations/get-all/locations/with-version`,
    );
    console.log('.....response', response?.data);
  } catch (error) {
    console.log(error, 'error');
  }
}

export default function* () {
  yield takeLatest(actions.HomeRequest, HomeSaga);
}
