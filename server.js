require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connected to mongodb"));

app.use(express.json())
app.listen(3000, () => console.log("server started"));
app.use(express.json())
