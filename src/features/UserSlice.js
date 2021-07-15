import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setSignOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
