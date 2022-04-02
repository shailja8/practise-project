const express = require('express');
const router = express.Router();
const userController =require('../controller/userController');
const { body } = require('express-validator');


router.post("/add",
body('pid').not().isEmpty(),
userController.addToCart
)

module.exports = router;