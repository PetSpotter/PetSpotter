const mongoose = require('mongoose');
const Pets = require('./models/User.model');
console.log('test')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/petspotter";

mongoose.connect(MONGO_URI, {
  userNewUrlParser: true
});

const petImport = [


  {
    "picturelink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Squirrel_posing.jpg/1200px-Squirrel_posing.jpg",
    "phone": 12312312,
    "email": "hello@lostsquirrel.com",
    "first_name": "John",
    "last_name": "Doe",
    "location": "London",
    "lostorfound": "LOST",
    "textdescription": "red fluffy squirrel",
    "date": "04/03/21",
    "nameofpet": "Ian",
    "descriptionofpet": "red squirrel",
    "typeofanimal": "squirrel",
    "colourofanimal": "red"
  },
  {
    "picturelink": "https://www.tagesspiegel.de/images/grosser-panda-meng-meng_zoo-berlin/24195486/2-format43.jpg",
    "phone": 3947234897,
    "email": "xijinping@panda.net",
    "first_name": "Xi",
    "last_name": "Jinping",
    "location": "Beijing",
    "lostorfound": "LOST",
    "textdescription": "lost near the zoo",
    "date": "04/03/21",
    "nameofpet": "Anotony",
    "descriptionofpet": "Giant Panda",
    "typeofanimal": "Giant Panda",
    "colourofanimal": "Black and white"
  },
 ]


Pets.insertMany(petImport)
  .then(petImport => {
    console.log(`Success! Added `);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
