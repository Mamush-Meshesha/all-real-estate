import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../slice/userSlice";
import { fetchPropertyFailure, fetchPropertyRequest, fetchPropertySuccess, uploadImageFailure, uploadImageRequest } from "../slice/homeSlice";

function* loginUser(action) {
    try {
          console.log("loginUser saga triggered with payload:", action.payload); // Add logging

    const response = yield call(
      axios.post,
      "http://localhost:3000/api/auth",
      action.payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    yield put(loginFailure(errorMsg));
  }
}
function* registerUser(action) {
    try {
        const res = yield call(axios.post, "http://localhost:3000/api/user", action.payload, {
            headers: {
                "Content-Type": "application/json"
            }
        }
            
        )
        yield put(registerSuccess(res.data))
    } catch (error) {
        yield put(registerFailure(error.message))
    }
}

function* uploadImage(action) {
  try {
    const res = yield call(axios.post, "http://localhost:3000/api/upload", action.payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    yield put(uploadImageRequest(res.data))
  } catch (error) {
    yield put(uploadImageFailure(error))
  }
}

function* fetchProperty() {
  try {
    const res = yield call(axios.get, "http://localhost:3000/api/property")
    yield put(fetchPropertySuccess(res.data))
    console.log(res.data)
  } catch (error) {
    yield put(fetchPropertyFailure(error))
  }
}

function* watchLoginUser() {
  yield takeLatest(loginRequest, loginUser); 
}

function* watchRegisterUser() {
    yield takeLatest(registerRequest, registerUser)
}

function* watchUploadImage() {
  yield takeLatest(uploadImageRequest, uploadImage)
}

function* watchFetchProperty() {
  yield takeLatest(fetchPropertyRequest, fetchProperty)
}

export { watchLoginUser, watchRegisterUser, watchUploadImage, watchFetchProperty };
