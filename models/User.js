var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose');



var UserSchema = mongoose.Schema({
  familyName: String,
  address: String,
  phoneNumer: String,
  email: String,
  numFamilyMembers: Number,
  monthlyGallons: [],
  dailyGallons: [],
  competition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Competition'
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

