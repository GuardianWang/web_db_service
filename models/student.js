const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    gpa: {
        type: Number,
    },
    year_enroll: {
        type: Number,
        required: true,
        default: () => new Date().getFullYear(),
    },
});

module.exports = studentSchema;
