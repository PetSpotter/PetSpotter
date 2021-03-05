const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema({
  picturelink: String,
  phone: Number,
  email: { type: Schema.Types.ObjectId, ref: 'User' },
  first_name: { type: Schema.Types.ObjectId, ref: 'User' },
  last_name: { type: Schema.Types.ObjectId, ref: 'User' },
  location: String,
  lostorfound: String,
  textdescription: String,
  date: String,
  nameofpet: String,
  descriptionofpet: String,
  typeofanimal: String,
  colourofanimal: String,

});

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;
