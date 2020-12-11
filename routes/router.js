const express = require("express");  // will use express router method
const router = express.Router();

const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");
const BookRouter = require("./BookRouter");

// only /api endpoint
// ROUTE FOR AUTH/PROFILE and BOOK

router.use("/auth", AuthRouter);
router.use("/profile", ProfileRouter);
router.use("/book", BookRouter);

module.exports = router;