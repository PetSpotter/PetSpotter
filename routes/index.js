const router = require("express").Router();
// const Pets = require("../models/Pets");


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// gets the pet list with all the pets
router.get('/', (req, res, next) => {
  Pets.find()
  .then(pet => res.status(200).json(pet, "All the pets"))
  .catch(err => next(err))
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
