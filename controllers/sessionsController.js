var passport = require('passport');
var User = require('../models/User');

module.exports.renderLoginPage = function(req, res) {
  res.render('auth/login', {user: req.user});
};

module.exports.loginUser = function(req, res, next) {
  req.session.save(function(err) {
    if(err) return next(err);
    res.redirect('/users', {user: req.user});
  });
};

module.exports.logoutUser = function(req, res, next) {
  req.logout();
  res.redirect('/');

};


// module.exports.loginUser = function (req, res, next) {
//   req.session.save(function (err) {
//     if (err) return next(err);
//       res.redirect('/users/index');
//   });
// };
