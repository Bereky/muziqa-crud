const asyncHandler = require("express-async-handler");

//add song
const addSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  res.json([{}]);
});

//get song
const getSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  console.log("here");

  res.json([{ title: "song Title" }]);
});

//update song
const updateSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  res.json("Song updated");
});

//delete song
const deleteSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  res.json("Song deleted");
});

module.exports = {
  addSong,
  getSong,
  updateSong,
  deleteSong,
};
