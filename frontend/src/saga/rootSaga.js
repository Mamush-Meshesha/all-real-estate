import { all } from "redux-saga/effects"; 
import {watchCreateProperty, watchFetchProperty, watchLoginUser,watchRegisterUser, watchUploadImage} from "./sagas";

function* rootSaga() {
  yield all([
      watchLoginUser(),
    watchRegisterUser(),
    watchFetchProperty(),
    watchUploadImage(),
      watchCreateProperty()
  ]);
}

export default rootSaga;
