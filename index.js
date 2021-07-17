// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Data is stored in an array
let tables = [];

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes to regular HTML
app.get('/',
    (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/newReservation',
    (req, res) => res.sendFile(path.join(__dirname, 'newReservation.html')));

app.get('/tables',
    (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Route to process the data sent
app.post('/saveReservation', (req, res) => {

    const  newReservation  = req.body;
    tables.push( newReservation );
    res.sendFile(path.join(__dirname, 'index.html'));

});
// Route to process the data sent
app.get('/fetchTableList', (req, res) => {

    console.log("tables: " + tables);
    fs.writeFile("log.txt", JSON.stringify(tables), err => {
        console.log(err);
    });
    return res.json(tables);

});

// Server is listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

