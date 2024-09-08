import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducer/rootReducer"
import rootSaga from "../saga/rootSaga"

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['property/uploadImageRequest'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)

export default store