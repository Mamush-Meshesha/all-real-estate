import { all } from "axios";
import watchLoginUser from "./sagas";

function* rootSaga() {
    yield all([
        watchLoginUser
    ])
}

export default rootSaga