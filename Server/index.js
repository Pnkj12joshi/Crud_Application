const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/userroutes");

const Port = 8003;

mongoose
  .connect("mongodb://127.0.0.1:27017/Crudapp")
  .then(() => console.log("mongoose is conncted"));

app.use(cors({ origin: "http://localhost:3000" })); // here this is cors and inside the cors we will put credentials and origin.
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for posting purpose

//routes
app.use("/", route);

app.listen(Port, () => console.log(`Server is connted ${Port}`));
