var passport = require('passport');
var User = require('../models/User');
var Competition = require('../models/Competition');

// List all users
var listUsers = function(req, res, next) {
  User.find(function(error, users) {
    if (error) res.json({message: 'Could not find any user'});
    res.render('./users/index', {
      title: "Here are our users",
      users: users,
      user: req.user
    });
  });
};


// Render Edit user Form
var editUserView = function(req, res, next) {
  var id = req.params.id;
  User.findById({_id: id}, function(error, user) {
    // delete this comment is the code works
    // if(error) res.json({message: 'Could not edit user because: ' + error});
    // res.render(
    //   'users/:id', {
    //     user: user
    //   }
    // )
    if(error) res.json({message: 'Could not edit user because: ' + error});
    // API
    // res.json({user: user});
    res.render('./users/edit', {title: "Edit user", user: user});
   });
}
// Create a new user
var createUser = function(req, res) {
  User.register(new User(
    {
      username: req.body.familyName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      numFamilyMembers: req.body.numFamilyMembers,
      monthlyGallons: req.body.monthlyGallons,
      dailyGallons: req.body.dailyGallons,
      competition: req.body.competition
    }), req.body.password, function(err, user) {
      if (err) return res.render('auth/register',
        {user: user});
        passport.authenticate('local')(req, res, function() {
          req.session.save(function(err) {
            if (err) {
              return next(err);
            }
            res.redirect('/users/' + req.user.id);
        });
     });
  });
};


// UPDATE user PAGE
var editUser = function(req, res, next) {
  var id = req.params.id;

  User.findById({_id: id}, function(error, user) {
    if (error) res.json({message: 'Could not find user because ' + error});

    if (req.body.username) user.username = req.body.familyName;
    if (req.body.password) user.password = req.body.password;
    if (req.body.address) user.address = req.body.address;
    if (req.body.phoneNumber) user.phoneNumber = req.body.phoneNumber;
    if (req.body.email) user.email = req.body.email;
    if (req.body.numFamilyMembers) user.numFamilyMembers = req.body.numFamilyMembers;
    if (req.body.monthlyGallons) user.monthlyGallons = req.body.monthlyGallons;
    if (req.body.dailyGallons) user.dailyGallons = req.body.dailyGallons;

    user.save(function(error) {
      if (error) res.json({message: 'user successfully updated'});
      res.redirect('/users/' + id);
    });
  });
};

// Show a user
var showUser = function(req, res, next) {
  var id = req.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) res.json({message: 'Could not find user because: ' + error});
    res.render(
      './users/show', {
        user: req.user
      }
    )
    // API
    // res.json({user: user});
   });
}

// Remove a user
var removeUser = function(req, res, next) {
  var id = req.params.id;

  User.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete user because ' + error});

    res.json({message: 'user successfully deleted'});
  });
};

module.exports = {
   listUsers:     listUsers,
   createUser:    createUser,
   editUserView:  editUserView,
   editUser:      editUser,
   showUser:      showUser,
   removeUser:    removeUser
}
