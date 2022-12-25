const express = require("express");
const app = express();
// const connectDB = require("./server");
const path = require("path");

require("dotenv").config();

const User = require("./routes/users");
const Auth = require("./routes/auth");
const Profile = require("./routes/profile");
const Post = require("./routes/post");

// connectDB();

app.use(express.json());

app.use("/api/users", User);
app.use("/api/auth", Auth);
app.use("/api/profile", Profile);
app.use("/api/posts", Post);

// Serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err.message);
    }
  );
});

module.exports = app;
