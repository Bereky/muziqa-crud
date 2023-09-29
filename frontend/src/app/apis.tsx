import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8400";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

const getSongs = async () => {
  const response = await axios.get(API_URL + "/api/get-song");

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const addNewSong = async (song: Song) => {
  const response = await axios.post(API_URL + "/api/add-song");

  if (response.data) {
    localStorage.setItem("songs", JSON.stringify(response.data));
  }

  return response;
};

const api = {
  getSongs,
  addNewSong,
};

export default api;
