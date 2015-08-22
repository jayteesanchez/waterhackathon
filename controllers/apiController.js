var User = require('../models/User');

// GET families in JSON
module.exports.renderFamilies = function(req, res) {
  User.find({}, function(err, users) {
    if(err) res.rend(err);

    res.json(users);
  });
};

module.exports.renderFamilyChart = function(req, res) {
  User.find({}, function(err, users) {
    if(err) res.rend(err);
    res.render('apitesting/charts', {users: users});
  });
};
