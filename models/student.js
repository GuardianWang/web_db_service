const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        length: 5,
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
        default: () => new Date().getFullYear(),
    },
});

module.exports = mongoose.model('Student', studentSchema);
