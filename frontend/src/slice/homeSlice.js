import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: null,
    loading: false,
    error: null,
    house: []
}

export const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        uploadImageRequest: (state) => {
            state.loading =  true
        },
        uploadImageSuccess: (state, action) => {
            state.loading = false,
                state.image = action.payload
        },
        uploadImageFailure: (state, action) => { 
            (state.loading = false),
              (state.error = {
                message: action.payload?.message || "Unknown error",
                code: action.payload?.code || null,
              });
        },
        fetchPropertyRequest: (state) => {
            state.loading = true
        },
        fetchPropertySuccess: (state, action) => {
            state.loading = false,
                state.house = action.payload
        },
        fetchPropertyFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    }
})

export const { fetchPropertyFailure, fetchPropertyRequest, fetchPropertySuccess,uploadImageFailure,uploadImageRequest,uploadImageSuccess } = propertySlice.actions

export default propertySlice.reducer
