const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 8400;

const router = require("./router/song");
connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.listen(PORT, () => console.log("Server running on port:", PORT));
