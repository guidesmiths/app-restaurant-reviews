import { put, takeLatest, all } from 'redux-saga/effects';
import { getAllRestaurants } from '../apiService/apiService';

function* fetchRestaurants() {
	const data = yield getAllRestaurants();
	yield put({ type: 'RESTAURANTS_RECEIVED', payload: data });
}
function* actionWatcher() {
	yield takeLatest('GET_RESTAURANTS', fetchRestaurants);
}
export default function* rootSaga() {
	yield all([actionWatcher()]);
}
