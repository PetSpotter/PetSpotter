const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  picturelink: String,
  phone: Number,
  email: String,
  first_name: String,
  last_name: String,
  location: String,
  lostorfound: String,
  textdescription: String,
  date: String,
  nameofpet: String,
  descriptionofpet: String,
  typeofanimal: String,
  colourofanimal: String,
});

const User = model("User", userSchema);

module.exports = User;
