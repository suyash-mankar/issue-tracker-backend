require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const bodyParser = require("body-parser");
const db = require("./config/mongoose");

app.use(cors());

// use bodyparser
app.use(bodyParser.json());

// use routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error", err);
  }
  console.log("express server is up and running");
});
