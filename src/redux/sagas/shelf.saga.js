import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



// shelf worker function
function* getShelf() {
  try {
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_ALL', payload: response.data })
  } catch (error) {
    console.error('Error getting shelf', error);
  }
}

function* getShelfById(action) {
  try {
    const response = yield axios.get(`/api/shelf/${action.payload}`)
    yield put({ type: 'SET_ALL', payload: response.data })
  } catch (error) {
    console.error('Error getting shelf by ID', error);
  }
}

function* deleteItemById(action) {
  const swal = withReactContent(Swal);

  try {
    let sweetResult = yield swal.
      fire({
        title: 'Are you sure you want to delete this item?',
        confirmButtonColor: '#263567',
        cancelButtonColor: '#a50104',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true
      })
    if (sweetResult.isConfirmed) {
      const response = yield axios.delete(`/api/shelf/${action.payload}`)
      yield put({ type: 'GET_ALL', payload: response.data })
    }
  } catch (error) {
    console.error(error);
  }
}

//saga for adding new item
function* addItemToShelf(action) {
  try {
    yield axios.post('/api/shelf', action.payload);
    yield put({ type: 'GET_ALL' });
  } catch (error) {
    console.error(error);
  }
}

function* editItem(action) {
  try {
    yield axios.put(`/api/shelf/${action.payload.id}`, action.payload)
    yield put({ type: 'GET_ALL', payload: action.payload.id })
  } catch (error) {

  }
}

// shelf saga function
function* shelfSaga() {
  yield takeLatest('GET_ALL', getShelf);
  yield takeLatest('GET_SHELF_BY_ID', getShelfById);
  yield takeLatest('EDIT_ITEM', editItem);
  yield takeLatest('ADD_ITEM', addItemToShelf);
  yield takeLatest('DELETE_ITEM_BY_ID', deleteItemById);
}

//exporting the saga to the store
export default shelfSaga;

