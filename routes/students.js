const express = require("express");
const router = express.Router();
const Student = require('../models/student');

// get all
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// get one
router.get('/:id', findStudentById, (req, res) => {
    res.json(res.student);
});

// create
router.post('/', async (req, res) => {
    const student = new Student({
        id: req.body.id,
        name: req.body.name,
        gpa: req.body.gpa,
        year_enroll: req.body.year_enroll,
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

// update
router.patch('/:id', (req, res) => {

});

// delete
router.delete('/:id', (req, res) => {

});

async function findStudentById(req, res, next) {
    let studentId = req.params.id;
    try {
        const student = await Student.findOne({'id': studentId});
        if (student == null) {
            return res.status(404).json({message: `cannot find student with id ${studentId}`});
        } else {
            res.student = student;
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }

    next();

}

module.exports = router;
