var mongoose = require('mongoose');
var User     = require('./User');

var CompetitionSchema = mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  prize: String,
  primaryContact: {
    name: String,
    email: String,
  },

  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]

});

module.exports = mongoose.model('Competition', CompetitionSchema);
