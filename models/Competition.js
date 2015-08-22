var mongoose = require('mongoose');

var CompetitionSchema = mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  prize: String,
  primaryContact: {
    name: String,
    email: String,
  },

  families: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }]

});

module.exports = mongoose.model('Competition', CompetitionSchema);
