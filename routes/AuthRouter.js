const express = require("express");  // will use express router method
const router = express.Router();
const AuthController = require("../controllers/AuthController");


// api/auth/
router.post("/register", AuthController.authRegister);
router.post("/login", AuthController.authLogin);

module.exports = router;