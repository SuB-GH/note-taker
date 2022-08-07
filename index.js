const fs = require('fs');
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 3100;
const app = express()

// parse data
app.use(express.urlencoded({ extended: true }));
// parse JSON data
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.use(express.static('public'));
const { notes } = require('./db/db.json')

//const router = express('express').Router;

// This will accept form input from the index.html file
app.post('/api/notes', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});

// HTML Routes to request data from front-end
// GET /notes should return the notes.html file.
// GET * should return the index.html file.
// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
// });

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});




// API Route to request data from front-end
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).

app.get('/db', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
  res.send('Hello!');
});
module.exports = app;

app.get('/db/db', (req, res) => {
  res.send('Hello!');
});

app.listen(3100, () => {
    console.log(`API server now on port 3100!`);
  });