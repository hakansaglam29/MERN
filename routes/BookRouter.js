const express = require("express");  // will use express router method
const router = express.Router();
const BookController = require("../controllers/BookController");


// api/auth/
router.post("/register", BookController.bookRegister);
router.post("/login", BookController.bookLogin);

module.exports = router;