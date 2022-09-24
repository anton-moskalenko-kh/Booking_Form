// Core
import { call, put, delay } from 'redux-saga/effects';
// Parts
import { setLoading, setItems } from '../../slice';
import api from "../../../../config/axios";

export function* callGetDestinationsWorker() {
    try {
        yield put(setLoading(true));
        const {data, status} = yield call(api.getDestinations)
        if (status === 200) {
            yield put(setItems(data))
        }
        yield delay(2000);
        yield put(setLoading(false));
    } catch (e) {
        console.warn(e);
    }
}