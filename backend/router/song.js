const express = require("express");
const router = express.Router();

const {
  addSong,
  deleteSong,
  updateSong,
  getSong,
} = require("../controller/songController");

router.post("/add-song", addSong);
router.get("/get-song", getSong);
router.put("/update-song", updateSong);
router.delete("/delete-song/:_id", deleteSong);

module.exports = router;
