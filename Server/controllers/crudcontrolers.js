const User = require("../model/user");

//crud_controllers

//create
const Createcontroller = async (req, res) => {
  try {
    const newuser = await User.create(req.body);
    console.log(req.body);
    res.status(201).json(newuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update
const Updatecontrollers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete
const Deletecontrollers = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  Createcontroller,
  Updatecontrollers,
  Deletecontrollers,
};
