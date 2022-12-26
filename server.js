const dotenv = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({path: '.env'});
} else {
    dotenv.config({path: '.env.docker'});
    // aws
    if (process.env.MONGODB_USERNAME) {
        process.env.DATABASE_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5jydn9h.mongodb.net/?retryWrites=true&w=majority`;
    }
}
const express = require("express");
const { default: mongoose } = require("mongoose");
const studentsRouter = require('./routes/students');

const app = express();
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connected to mongodb"));

app.use(express.json());
app.use('/students', studentsRouter);
app.listen(process.env.APP_PORT, () => console.log("server started"));
