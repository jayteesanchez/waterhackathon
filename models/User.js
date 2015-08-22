var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
  email: String,
  address: String,
  familyDescription: String,
  members: Number,
  photo_url: String,
  team: [{
  }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

