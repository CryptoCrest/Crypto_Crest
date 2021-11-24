let express = require('express');
let router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

router.post('/signup', usersController.signup);

router.post('/signin', usersController.signin);

module.exports = router;
