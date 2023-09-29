import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "./apis";

import {
  fetchSongSuccess,
  fetchSongPending,
  fetchSongFailure,
  addSongPending,
  addSongSuccess,
  addSongFailure,
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

interface AddSongsResponse {
  data: Song[];
}

interface AddSongAction {
  payload: Song;
}

function* fetchSongs() {
  try {
    const response: FetchSongsResponse = yield call(api.getSongs);
    yield put(fetchSongSuccess(response.data));
  } catch (error) {
    yield put(fetchSongFailure());
  }
}

function* addSong(action: { type: string; payload: Song }) {
  try {
    const response: AddSongsResponse = yield call(
      api.addNewSong,
      action.payload
    );
    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure());
  }
}

function* songSaga() {
  yield takeEvery("song/fetchSongPending", fetchSongs);
  yield takeEvery("song/addSongPending", addSong);
}

export default songSaga;
