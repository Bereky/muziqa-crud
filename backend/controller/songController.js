const asyncHandler = require("express-async-handler");
const Song = require("../models/song");

//add song
const addSong = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  const song = await Song.create({
    title: title,
    artist: artist,
    album: album,
    genre: genre,
  });

  if (song) {
    const songs = await Song.find();

    if (songs) {
      res.status(201).json(songs);
    } else {
      res.status(401).json("Error occured while adding song");
    }
  } else {
    res.status(401).json("Error occured while adding song");
  }
});

//get song
const getSong = asyncHandler(async (req, res) => {
  const songs = await Song.find();

  if (songs) {
    const allSongs = await Song.find();

    const artists = [];
    allSongs.forEach((song) => {
      const { artist, album } = song;
      let artistEntry = artists.find((entry) => entry.artist === artist);

      if (!artistEntry) {
        artistEntry = { artist, songs: [], albums: [] };
        artists.push(artistEntry);
      }

      artistEntry.songs.push(song);

      if (!artistEntry.albums.includes(album)) {
        artistEntry.albums.push(album);
      }
    });

    // Categorize by albums
    const albums = [];
    allSongs.forEach((song) => {
      const { artist, album } = song;

      let albumEntry = albums.find((entry) => entry.album === album);

      if (!albumEntry) {
        albumEntry = { album, artist, songs: [] };
        albums.push(albumEntry);
      }

      albumEntry.songs.push(song);
    });

    // Categorize by genres
    const genres = [];
    allSongs.forEach((song) => {
      const { genre, title, album, artist } = song;

      let genreEntry = genres.find((entry) => entry.genre === genre);

      if (!genreEntry) {
        genreEntry = { genre, songs: [] };
        genres.push(genreEntry);
      }

      genreEntry.songs.push({ title, album, artist });
    });

    res.status(201).json({ songs, artists, albums, genres });
  } else {
    res.status(401).json("Error occured while getting song");
  }
});

//update song
const updateSong = asyncHandler(async (req, res) => {
  const { _id, title, artist, album, genre } = req.body;

  console.log(req.body);

  const song = await Song.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        title: title,
        artist: artist,
        album: album,
        genre: genre,
      },
    }
  );

  if (song) {
    const songs = await Song.find();

    if (songs) {
      res.status(201).json(songs);
    } else {
      res.status(401).json("Error occured while updating song");
    }
  } else {
    res.status(401).json("Error occured while updating song");
  }
});

//delete song
const deleteSong = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  const song = await Song.findOneAndDelete({ _id: _id }, { new: true });

  if (song) {
    const songs = await Song.find();

    if (songs) {
      res.status(201).json(songs);
    } else {
      res.status(401).json("Error occured while updating song");
    }
  } else {
    res.status(500).json("Error occured while deleting song");
  }
});

module.exports = {
  addSong,
  getSong,
  updateSong,
  deleteSong,
};
