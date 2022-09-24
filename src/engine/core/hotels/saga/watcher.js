// Core
import { takeEvery } from 'redux-saga/effects';
// Parts
import { getHotelsAsync } from './asyncActions';
import { callGetHotelsWorker } from './workers';

export function* hotelsWatcher() {
    yield takeEvery(getHotelsAsync.type, callGetHotelsWorker);
}