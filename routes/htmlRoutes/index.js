const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

//GET /notes returns the notes.html file.
router.get('/notes.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/notes.html'));
});

router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

//GET * returns the index.html file.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

module.exports = router;
