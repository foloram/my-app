// REVIEW: This file is named Store.jsx but contains no JSX — rename to Store.js.
// Also, combining the slice definition and store configuration in a single file
// will not scale well. Consider separating into slices/userSlice.js and store.js.
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", isAuth: false },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isAuth = true;
    },
    logout: (state) => {
      state.username = "";
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({ reducer: { user: userSlice.reducer } });
