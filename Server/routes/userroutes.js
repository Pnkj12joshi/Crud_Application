const express = require("express");
const route = express.Router();

const {
  Createcontroller,
  Updatecontrollers,
  Deletecontrollers,
} = require("../controllers/crudcontrolers");

//routes...
route.get("/", (req, res) => {
  res.end("Hello from Server side");
});
route.post("/users", Createcontroller);
route.put("/user/:id", Updatecontrollers);
route.delete("users/:id", Deletecontrollers);

module.exports = route;
