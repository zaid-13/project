const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const cors = require("cors");
const studentRouter = require("./routes/StudentRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "Content-Type",
  //   "Authorization"
  // );
  next();
});

const uri =
  "mongodb+srv://zaid:zaidadmin@cluster0.9p1rhbx.mongodb.net/usersDB?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log("listening to " + port));
  })
  .catch((err) => {
    console.log("cannot connect to the database: ", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});

app.get("/api", (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

app.use(router);
app.use(studentRouter);
