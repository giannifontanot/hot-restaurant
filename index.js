// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Data is stored un an array
let tables = [];



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
// Route to process the data sent
app.get('/listTables', (req, res) => {
tables=[
    {
        name: "Luis",
        phone: "(214) 1234-1234",
        email: "luis@gmail",
        id: "1234",
    },
    {
        name: "Mario",
        phone: "(832) 1234-1234",
        email: "mario@gmail",
        id: "5678",
    },
    {
        name: "Pedro",
        phone: "(972) 1234-1234",
        email: "pedro@gmail",
        id: "4321",
    },
];
    JSON.stringify(tables) ;
     console.log("JSON.stringify(tables): " + JSON.stringify(tables));
     return res.json(tables);

});

// Server is listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

