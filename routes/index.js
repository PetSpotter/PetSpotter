const router = require("express").Router();
const Pets = require("../models/Pets");
const uploader = require("../config/cloudinary.config");

// You put the next routes here 👇

// gets the pet list with all the pets
router.get('/', (req, res, next) => {
  Pets.find()
  .then(pet => res.status(200).json(pet))
  .catch(err => next(err))
})

router.post('/', (req, res) => {
  const {owner, location, lostOrFound, textDescription, date, nameOfPet, descriptionOfPet, typeOfPet, colourOfPet } = req.body;

  Pet.create({
    owner,
    location,
    lostOrFound,
    textDescription,
    date,
    nameOfPet,
    descriptionOfPet,
    typeOfPet,
    colourOfPet
  });
})

// gets a specific pet from the pet list
router.get('/:id', (req, res) => {
  Pets.findById(req.params.id)
  .then(pet => res.status(200).json(pet))
  .catch(err => res.status(200).json(err))
})

// updates a specific pet
// router.put('/:id', (req, res) => {
//   const {  } = req.body
//   Pets.findByIdAndUpdate( req.params.id, {  }, { new: true } )
//   .then(pet => res.status(200).json(pet))
//   .catch(err => res.json(err))
// })

// deletes a specific pet
// router.delete('/:id', (req, res) => {
//   Pets.findByIdAndDelete(req.params.id)
//     .then(pet => res.status(200).json(pet))
//     .catch(err => res.json(err))
// })

router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  // console.log('file is: ', req.file)
 
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
 
  res.json({ secure_url: req.file.path });
  console.log(req.file.path)
});
module.exports = router;