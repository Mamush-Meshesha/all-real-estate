import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../slice/userSlice";
import { createPropertyFailure,  createPropertyRequest,  createPropertySuccess, fetchPropertyDetailFailure, fetchPropertyDetailRequest, fetchPropertyDetailSuccess, fetchPropertyFailure, fetchPropertyRequest, fetchPropertySuccess, uploadImageFailure, uploadImageRequest, uploadImageSuccess } from "../slice/homeSlice";

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
        withCredentials: true,
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
    const token = Cookies.get("token")
    const res = yield call(axios.post, "http://localhost:3000/api/upload", action.payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`, // Include the token here
      },
      withCredentials: true, // Ensure cookies are sent with request
    })
    yield put(uploadImageSuccess(res.data))
  } catch (error) {
    yield put(uploadImageFailure(error))
  }
}
function* createProperty(action) {
  try {
        const token = Cookies.get("token");

    const res = yield call(axios.post, "http://localhost:3000/api/property", action.payload, {
      headers: {
        "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Include the token here

      },
      withCredentials: true, 
    }
    )
    yield put(createPropertySuccess(res.data))
  } catch (error) {
    yield put(createPropertyFailure(error.message))
  }
}
function* fetchProperty() {
  try {
    const res = yield call(axios.get, "http://localhost:3000/api/prop")
    yield put(fetchPropertySuccess(res.data))
    console.log(res.data)
  } catch (error) {
    yield put(fetchPropertyFailure(error))
  }
}

function* fetchPropertyDetail() {
  try {
    const res = yield call(axios.get, "http://localhost:3000/api/prop")
    yield put(fetchPropertyDetailSuccess(res.data))
  } catch (error) {
    yield put(fetchPropertyDetailFailure(error.message))
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

function* watchCreateProperty() {
  yield takeLatest(createPropertyRequest, createProperty)
}

function* watchFetchPropertyDetail() {
  yield takeLatest(fetchPropertyDetailRequest,fetchPropertyDetail)
}
export {
  watchLoginUser,
  watchRegisterUser,
  watchUploadImage,
  watchFetchProperty,
  watchCreateProperty,
  watchFetchPropertyDetail
};
