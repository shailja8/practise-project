const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController =require('../controller/adminController');

router.post("/signup",
body('email').isEmail(),
body('password').isLength(6),
adminController.adminSignup
)

router.post("/signin",
body('email').isEmail(),
body('email').not().isEmpty(),
body('password').isLength(6),
body('password').not().isEmpty(),
adminController.adminSignin
)

module.exports = router;