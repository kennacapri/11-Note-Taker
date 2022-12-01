const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// asynchronous processes. (they execute tasks in the background without user having to wait for task to finish)
//promisify takes function as an input that follows node.js callback style, and returns a version of the same that returns a promise instead of a callback.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware
app.use(express.static('./develop/public'));


// GET request
app.get('/api/notes', function (req, res) {
readFileAsync('./develop/db/db.json', 'utf8').then(function (data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
})
});

//POST request
app.post('/api/notes/', function (req, res) {
    const note = req.body;
    readFileAsync('./develop/db/db.json', 'utf8').then(function (data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes
    }).then(function (notes) {
        writeFileAsync('./develop/db/db.json', JSON.stringify(notes))
        res.json(note);
    })
    });