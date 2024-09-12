import { all } from "redux-saga/effects"; 
import {watchCreateProperty, watchFetchProperty, watchFetchPropertyDetail, watchLoginUser,watchRegisterUser, watchUploadImage} from "./sagas";

function* rootSaga() {
  yield all([
      watchLoginUser(),
    watchRegisterUser(),
    watchFetchProperty(),
    watchUploadImage(),
    watchCreateProperty(),
      watchFetchPropertyDetail()
  ]);
}

export default rootSaga;
