const router = require('express').Router();
// const index = require('../apiRoutes/index'); //testing this out
// router.use(index);

const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');


// THIS WORKS!
router.get('/db', (req, res) => {
    let results = notes;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // } try adding this if it works?
    res.json(results);
    console.log("test")
});

// this works in insomnia, but not in browser!!
router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  console.log("test????")
  // if (!validateNote(req.body)) {
  //   res.status(400).send('The note is not properly formatted.');
  // } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  //}
  console.log("test????")
});

  // router.post('/note-taker/db/db.json', (req, res) => {
  //   // set id based on what the next index of the array will be
  //   req.body.id = animals.length.toString();
  
  //   // if any data in req.body is incorrect, send 400 error back
  //   if (!validateAnimal(req.body)) {
  //     res.status(400).send('The animal is not properly formatted.');
  //   } else {
  //     const animal = createNewAnimal(req.body, animals);
  //     res.json(animal);
  //   }
  //   console.log("is this one working?");
  // });

module.exports = router;



//router.get('/notes/:id', (req, res) => { testing line 17
//     router.get('/db', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });
