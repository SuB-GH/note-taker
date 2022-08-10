const express = require('express');  //this "requires" express.js
const PORT = process.env.PORT || 3100;
const app = express()  //this instantiates the server

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(3100, () => {
  console.log(`API server now on port 3100!`);
});

