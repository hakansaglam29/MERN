const express = require("express");
const app = express();

require("dotenv").config();
const connectDB = require("./models/connectDB");

const router = require("./routes/router");

const path = 5000;
connectDB();
app.use("/api", router);
app.listen(path, ()=> {
    console.log(`I'm listening on port ${path}`)
});