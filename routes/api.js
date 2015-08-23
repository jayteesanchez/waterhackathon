var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/User');
var apiController = require('../controllers/apiController');


// GET family in JSON format
router.get('/families', apiController.renderFamilies);

router.get('/charts', function(req, res) {
  User.find({}, function(err, users) {
    if(err) res.rend(err);
    res.render('apitesting/charts', {users: users});
  });
});

module.exports = router;
