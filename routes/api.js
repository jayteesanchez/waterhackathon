var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/User');
var apiController = require('../controllers/apiController');



router.get('/families', apiController.renderFamilies);


module.exports = router;
