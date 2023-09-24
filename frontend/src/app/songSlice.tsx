import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  status: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    fetchSongPending: (state) => {
      state.status.isLoading = true;
    },
    fetchSongSuccess: (state, action) => {
      state.songs = action.payload;
      state.status.isLoading = false;
      state.status.isSuccess = true;
    },
    fetchSongFailure: (state) => {
      state.songs = [];
      state.status.isError = true;
      state.status.isSuccess = false;
    },
  },
});

export const { fetchSongPending, fetchSongSuccess, fetchSongFailure } =
  songSlice.actions;
export default songSlice.reducer;
