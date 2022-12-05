const router = require('express').Router();

const { notes } = require('../../db/db');

// imports function for creating and deleting notes
const {
    createNewNote,
    deleteNote,
} = require('../../lib/noteFunction.js');

// req represents the http request. res represents the response
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports = router;