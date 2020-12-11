const express = require("express");

const app = express();

const router = require("./routes/router");

const path = 5000;

app.use("/api", router);

app.listen(path, ()=> {
    console.log(`I'm listening on port ${path}`)
});