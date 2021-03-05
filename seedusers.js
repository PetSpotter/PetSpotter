const mongoose = require('mongoose');
const Users = require('./models/User.model');
console.log('test')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/petspotter";

mongoose.connect(MONGO_URI, {
  userNewUrlParser: true
});

const userImport = [
  {
    first_name: "James",
    last_name: 54564,
    password: "smith",
    email: "smith@hotmail.com",
  },
  {
    first_name: "Keith",
    last_name: "Michaels",
    password: "guess",
    email: "keith@dfs.com",
  },
 ]


Users.insertMany(userImport)
  .then(userImport => {
    console.log(`Success! Added `);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
