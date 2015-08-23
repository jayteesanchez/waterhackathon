var express = require('express');
var passport = require('passport');
var router = express.Router();
var sessionsController = require('../controllers/sessionsController');
var usersController = require('../controllers/usersController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

// get register page
router.get('/register', function(req, res, next) {
  res.render('auth/register', {user: req.user});
});

router.post('/register', usersController.createUser);

//get login page
router.get('/login', function(req, res, next) {
  res.render('auth/login', {user: req.user});
});

// get landing
router.get('/landing', function(req, res, next) {
  res.render('landing', {user: req.user});
});


router.get('/logout', sessionsController.logoutUser);

router.post('/login', sessionsController.loginUser);

// router.get('/landing', function(req, res, next) {
//   res.render('landing');
// });


router.get('/about', function(req, res, next) {
  res.render('about', {user: req.user});
});

module.exports = router;
