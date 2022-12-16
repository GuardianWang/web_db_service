const express = require("express");
const router = express.Router();
const Student = require('../models/student');

// get all
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
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
