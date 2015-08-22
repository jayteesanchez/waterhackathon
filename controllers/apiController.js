var User = require('../models/Users');


module.exports.renderUsers = function(req, res) {
  User.find({}, function (err, users) {
    if(err) res.rend(err);

    res.json(users);
  });
};

