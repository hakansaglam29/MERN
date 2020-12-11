const express = require("express");  // will use express router method

const router = express.Router();


// only /api endpoint
router.get("/", (req,res)=> {
    console.log("API Page");
    res.send("API Page");
})

module.exports = router;