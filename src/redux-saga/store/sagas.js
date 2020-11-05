import { all, takeEvery } from 'redux-saga/effects';
// import component Saga file
import SampleOne from '../sampleOne/saga';

export default function* rootSaga(getState) {
    yield all([
        SampleOne(),
    ]);
}