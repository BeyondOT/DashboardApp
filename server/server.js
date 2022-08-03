const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes
app.get("/", (req, res) => {
  res.send("We are home");
});

// COnnect to DB
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

// Port listening
app.listen(3001);
