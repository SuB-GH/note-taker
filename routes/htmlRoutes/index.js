const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/notes.html'));
});

router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../note-taker/public/index.html'));
});

module.exports = router;
