import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import homeSlice from "../slice/homeSlice";


const rootReducer = combineReducers({
    user: userSlice,
    property: homeSlice
})

export default rootReducer