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
    const response = yield axios.get(`/api/shelf/${action.payload}`)
    yield put({type: 'SET_ALL', payload: response.data})
  } catch (error) {
    console.error('Error getting shelf by ID', error);
  }
}

function* deleteItemById(action) {
  try {
    const response = yield axios.delete(`/api/shelf/${action.payload}`)
    yield put({ type: 'GET_ALL', payload: response.data })
  } catch (error) {
    console.error(error);
  }
} 
    
//saga for adding new item
function* addItemToShelf(action) {
  try {
    yield axios.post('/api/shelf', action.payload);
    yield put({type: 'GET_ALL'});
  } catch (error) {
    console.error(error);
  }
}

// shelf saga function
function* shelfSaga() {
  yield takeLatest('GET_ALL', getShelf);
  yield takeLatest('GET_SHELF_BY_ID', getShelfById);
  yield takeLatest('ADD_ITEM', addItemToShelf);
  yield takeLatest('DELETE_ITEM_BY_ID', deleteItemById);
}

//exporting the saga to the store
export default shelfSaga;

