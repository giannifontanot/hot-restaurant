// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Data is stored un an array
const tables = [];



// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes to regular HTML
app.get('/',
    (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/newReservation',
    (req, res) => res.sendFile(path.join(__dirname, 'newReservation.html')));

app.get('/showTables',
    (req, res) => res.sendFile(path.join(__dirname, 'showTables.html')));

// Route to process the data sent
app.post('/saveReservation', (req, res) => {

    const newReservation = req.body;
    //const { name ,  phone ,  email ,  id } = newReservation;
    // console.log("id" + id);
    // console.log("email" + email);
    // console.log("phone" + phone);
    // console.log("name" + name);
    //
    // const reservation =
    //     {
    //         name: name,
    //         phone: phone,
    //         email: email,
    //         id: id
    //     }

    tables.push(newReservation);

    console.log(tables);
});


// Server is listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

