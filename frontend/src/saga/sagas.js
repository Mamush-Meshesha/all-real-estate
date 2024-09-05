import { put, call, takeLatest } from "redux-saga/effects"
import axios from "axios"
import { loginFailure, loginSuccess } from "../slice/userSlice"
function* loginUser(action) {
    try {
        const login = yield call(axios.post, "http://localhost:3000/api/auth", action.payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        yield put(loginSuccess(login.data))
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}

function* watchLoginUser() {
    yield takeLatest("user/loginUser", loginUser)
}

export default watchLoginUser