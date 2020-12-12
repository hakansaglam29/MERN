const express = require("express");  // will use express router method
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");


// api/auth/
router.post("/register", ProfileController.profileRegister);
router.post("/login", ProfileController.profileLogin);

module.exports = router;


// todo
// 