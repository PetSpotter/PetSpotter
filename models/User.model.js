const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  first_name: String,
  last_name: String,
  email: String,
  phone: Number
});

const User = model("User", userSchema);

module.exports = User;
