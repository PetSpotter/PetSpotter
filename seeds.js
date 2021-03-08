const mongoose = require('mongoose');
const Pets = require('./models/Pets');
require("dotenv/config");

console.log('test')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/petspotter";

mongoose.connect(MONGO_URI, {
  userNewUrlParser: true
});

const petImport = [
  {
    "pictureLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Squirrel_posing.jpg/1200px-Squirrel_posing.jpg",
    "phone": 12312312,
    "location": "London",
    "lostOrFound": "LOST",
    "textDescription": "red fluffy squirrel",
    "date": "04/03/21",
    "nameOfPet": "Ian",
    "descriptionOfPet": "red squirrel",
    "typeOfPet": "squirrel",
    "colourOfPet": "red"
  },
  {
    "pictureLink": "https://www.tagesspiegel.de/images/grosser-panda-meng-meng_zoo-berlin/24195486/2-format43.jpg",
    "phone": 3947234897,
    "location": "Beijing",
    "lostOrFound": "LOST",
    "textDescription": "lost near the zoo",
    "date": "04/03/21",
    "nameOfPet": "Antony",
    "descriptionOfPet": "Giant Panda",
    "typeOfPet": "Giant Panda",
    "colourOfPet": "Black and white"
  }
 ]


Pets.insertMany(petImport)
  .then(petImport => {
    console.log(`Success! Added `);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
