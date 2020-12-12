const express = require("express");  // will use express router method
const validator = require("express-validator");  // validate
const router = express.Router();
const AuthController = require("../controllers/AuthController");


// api/auth/
router.post(
    "/register",
    [validator.check("password", "Please enter a password with 6 and more chars").isLength({
        min:6,
            }
        ),
    validator.check("email", "Please enter a valid email").isEmail(),
    ], 
    AuthController.authRegister);
router.post("/login", AuthController.authLogin);

module.exports = router;