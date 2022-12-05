const router = require('express').Router;

const {notes } = require('../../db/db');

// imports function for creating and deleting notes
const {
    createNewNote,
    deleteNote,
} = require('../../lib/noteFunctions.js');

// req represents the http request. res represents the response
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});
