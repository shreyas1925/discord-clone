import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import appReducer from "../features/appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
