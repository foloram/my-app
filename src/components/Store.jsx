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
