const mongoose = require("mongoose");

//schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  profile: {
    type: String,
    unique: true,
    required: true,
  },
});

//models
const User = mongoose.model("user", UserSchema);

module.exports = User;
