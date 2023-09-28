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
      console.log(action.payload);
    },
    fetchSongFailure: (state) => {
      state.songs = [];
      state.status.isError = true;
      state.status.isSuccess = false;
    },

    addSongPending: (state) => {
      state.status.isLoading = true;
    },
    addSongSuccess: (state) => {
      //state.songs = action.payload;
      state.status.isLoading = false;
      state.status.isSuccess = true;
      // console.log(action.payload);
    },
    addSongFailure: (state) => {
      state.songs = [];
      state.status.isError = true;
      state.status.isSuccess = false;
    },
  },
});

export const {
  fetchSongPending,
  fetchSongSuccess,
  fetchSongFailure,
  addSongPending,
  addSongSuccess,
  addSongFailure,
} = songSlice.actions;
export default songSlice.reducer;
