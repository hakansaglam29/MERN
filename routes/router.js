const express = require("express");  // will use express router method

const router = express.Router();

const AuthRouter = require("./AuthRouter");

// only /api endpoint
// ROUTE FOR AUTHO

router.use("/auth", AuthRouter);

module.exports = router;