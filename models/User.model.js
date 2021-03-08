const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
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
