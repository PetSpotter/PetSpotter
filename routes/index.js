const router = require("express").Router();
const Pets = require("../models/Pets");

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

module.exports = router;