const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema({
  pictureLink: String,
  phone: Number,
  email: { type: Schema.Types.ObjectId, ref: 'User' },
  first_name: { type: Schema.Types.ObjectId, ref: 'User' },
  last_name: { type: Schema.Types.ObjectId, ref: 'User' },
  location: String,
  lostOrFound: String,
  textDescription: String,
  date: String,
  nameOfPet: String,
  descriptionOfPet: String,
  typeOfPet: String,
  colourOfPet: String,
});

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;