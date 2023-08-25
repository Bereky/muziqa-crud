const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 8000;
connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create song
app.post("/", (req, res) => {
  res.json("song added");
});

// get song
app.get("/", (req, res) => {
  res.json("song list");
});

// update song
app.put("/", (req, res) => {
  res.json("song updated");
});

//delete song
app.delete("/", (req, res) => {
  res.json("song deleted");
});

app.listen(PORT, () => console.log("Server running on port:", PORT));
