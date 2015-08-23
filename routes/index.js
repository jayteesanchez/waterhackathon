var express = require('express');
var passport = require('passport');
var router = express.Router();
var sessionsController = require('../controllers/sessionsController');
var usersController = require('../controllers/usersController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// get register page
router.get('/register', function(req, res, next) {
  res.render('auth/register');
});

router.post('/register', usersController.createUser);

//get login page
router.get('/login', function(req, res, next) {
  res.render('auth/login');
});

// get landing
router.get('/landing', function(req, res, next) {
  res.render('landing');
});



router.post('/login', sessionsController.loginUser);

router.get('/landing', function(req, res, next) {
  res.render('landing');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
