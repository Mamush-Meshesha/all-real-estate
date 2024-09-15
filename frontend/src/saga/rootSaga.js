import { all } from "redux-saga/effects";
import {
  watchChapaPay,
  watchCreateProperty,
  watchFetchProperty,
  watchFetchPropertyDetail,
  watchLoginUser,
  watchRegisterUser,
  watchStripePay,
  watchUploadImage,
} from "./sagas";

function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchRegisterUser(),
    watchFetchProperty(),
    watchUploadImage(),
    watchCreateProperty(),
    watchFetchPropertyDetail(),
    watchStripePay(),
    watchChapaPay()
  ]);
}

export default rootSaga;
