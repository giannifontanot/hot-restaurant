// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

const tables = [];



// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Star Wars Characters (DATA)

const characters = [
    {
        routeName: 'yoda',
        name: 'Yoda',
        role: 'Jedi Master',
        age: 900,
        forcePoints: 2000,
    },
    {
        routeName: 'darthmaul',
        name: 'Darth Maul',
        role: 'Sith Lord',
        age: 200,
        forcePoints: 1200,
    },
    {
        routeName: 'obiwankenobi',
        name: 'Obi Wan Kenobi',
        role: 'Jedi Master',
        age: 55,
        forcePoints: 1350,
    },
];

// Routes

app.get('/',
    (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reservationsView',
    (req, res) => res.sendFile(path.join(__dirname, 'reservationsView.html')));

app.get('/newReservation',
    (req, res) => res.sendFile(path.join(__dirname, 'newReservation.html')));

app.get('/showTables',
    (req, res) => res.sendFile(path.join(__dirname, 'showTables.html')));


app.post('/saveReservation', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newReservation = req.body;
    const { name ,  phone ,  email ,  id } = newReservation;
    console.log("id" + id);
    console.log("email" + email);
    console.log("phone" + phone);
    console.log("name" + name);

    const reservation =
        {
            name: name,
            phone: phone,
            email: email,
            id: id
        }

    tables.push(reservation);

    console.log(tables);
});

app.post('/showTables', (req, res) => {


});

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or returns false
app.get('/api/characters/:character', (req, res) => {
    const chosen = req.params.character;

    console.log(chosen);

    /* Check each character routeName and see if the same as "chosen"
     If the statement is true, send the character back as JSON,
     otherwise send the boolean value false as JSON */

    for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

