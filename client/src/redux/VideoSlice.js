import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentuser: null,
  loading: false,
  error: false,
};
export const VideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentuser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentuser = null;
      state.loading = false;
      state.error = false;
    },
  },
});
export const { logOut, loginStart, loginFailure, loginSuccess } =
  VideoSlice.actions;

export default VideoSlice.reducer;
