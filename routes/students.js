const express = require("express");
const router = express.Router();

// get all
router.get('/', (req, res) => {
    res.send('All students');
});

// get one
router.get('/:id', (req, res) => {

});

// create
router.post('/', (req, res) => {

});

// update
router.patch('/:id', (req, res) => {

});

// delete
router.delete('/:id', (req, res) => {

});

module.exports = router;
