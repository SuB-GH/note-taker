const router = require('express').Router();

const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/db', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  res.json(note);
  //}
});

module.exports = router;
