import { all } from "redux-saga/effects"; 
import {watchFetchProperty, watchLoginUser,watchRegisterUser, watchUploadImage} from "./sagas";

function* rootSaga() {
  yield all([
      watchLoginUser(),
    watchRegisterUser(),
    watchFetchProperty(),
      watchUploadImage()
  ]);
}

export default rootSaga;
