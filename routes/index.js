var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('auth/register');
});


router.get('/login', function(req, res, next) {
  res.render('auth/login');
});

router.get('/landing', function(req, res, next) {
  res.render('landing');
});

module.exports = router;
