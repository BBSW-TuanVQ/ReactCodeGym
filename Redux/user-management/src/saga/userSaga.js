import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  GET_USER,
  GET_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
  try {
    const response = yield axios.get(BaseURL);
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* deleteUser(action) {
  try {
    const response = yield axios.delete(BaseURL + `/${action.payload.id}`)
    alert(`response status ${response.status}`)
    console.log(response)
  }catch(error) {
    console.log("error - getUser : ", error);
  }
}
export default function* rootSaga() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(DELETE_USER, deleteUser);
}
