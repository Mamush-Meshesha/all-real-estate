import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first_name: "",
    email: "",
    password: "",
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading =  true
        },
        loginSuccess: (state, action) => {
            state.loading = false,
            state.first_name = action.payload.first_name,
            state.email = action.payload.email
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error =  action.payload
        }
    }
})

export const { loginFailure, loginRequest, loginSuccess } = userSlice.actions

export default userSlice.reducer