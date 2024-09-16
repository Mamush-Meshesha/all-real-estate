import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  email: "",
  password: "",
  full_name: "",
  address: "",
  phone_number: "",
  comfirm_password: "",
  isLoggedIn: false

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginSuccess: (state, action) => {
      (state.loading = false), (state.user = action.payload);
      state.isLoggedIn = true
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequest:(state, action) => {
      state.full_name = action.payload.full_name
      state.email = action.payload.email
      state.password = action.payload.password
      state.address=  action.payload.address
      state.loading = true
    },

    registerSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    registerFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirm_password: (state, action) => {
      state.comfirm_password= action.payload
    },
    setFull_name: (state, action) => {
      state.full_name = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setPhone_number: (state, action) => {
      state.phone_number= action.payload
    }
  },
});

export const {
  loginFailure,
  loginRequest,
  loginSuccess,
  setEmail,
  setPassword,
  setFull_name,
  registerFailure,
  registerRequest,
  registerSuccess,
  setAddress,
  setPhone_number,
  setConfirm_password
} = userSlice.actions;

export default userSlice.reducer;
