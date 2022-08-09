const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');


//GET /api/notes should read the db.json file and return all saved notes as JSON.
// router.get('api/notes', (req, res) => {
//     let results = notes;
//     res.json(results);
//     console.log("test if this is this working?");
// });

router.get('/db', (req, res) => {
    let results = notes;
    res.json(results);
    console.log("test if this is this working?");
});

router.post('api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

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
