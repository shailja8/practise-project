const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController =require('../controller/userController');

router.post("/add",
body('name').not().isEmpty(),
body('email').not().isEmpty(),
body('email').isEmail(),
body('password').not().isEmpty(),
body('mobile').not().isEmpty(),
body('mobile').isNumeric(),
body('mobile').isLength(10),
userController.addUser
)


module.exports = router;