import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// shelf worker function
function* getShelf() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({type: 'GET_ALL', payload: response.data})
    } catch (error) {
        console.error('Error getting shelf', error);
    }
}

// shelf saga function
function* shelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
}

//exporting the saga to the store
export default shelfSaga;

