import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import Api from "./apis";

import {
  fetchSongSuccess,
  fetchSongPending,
  fetchSongFailure,
} from "./songSlice";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

interface FetchSongsResponse {
  data: Song[];
}

function* fetchSongs() {
  try {
    const response: FetchSongsResponse = yield call(Api.getSongs);
    yield put(fetchSongSuccess(response.data));
  } catch (error) {
    yield put(fetchSongFailure());
  }
}

function* songSaga() {
  yield takeEvery("song/fetchSongPending", fetchSongs);
}

export default songSaga;
