import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// shelf worker function
function* getShelf() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({type: 'SET_ALL', payload: response.data})
    } catch (error) {
        console.error('Error getting shelf', error);
    }
}

function* getShelfById(action) {
  try {
    const response = yield axios.get(`/api/shelf/${action.payload.id}`)
    yield put({type: 'SET_ALL', payload: response.data})
  } catch (error) {
    console.error('Error getting shelf by ID', error);
  }
}

// shelf saga function
function* shelfSaga() {
    yield takeLatest('GET_ALL', getShelf);
    yield takeLatest('GET_SHELF_BY_ID', getShelfById);
}

//exporting the saga to the store
export default shelfSaga;

