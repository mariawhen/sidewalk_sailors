var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var PirateSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  zipcode: String,
  treasure_count: Number
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

Pirate.plugin(passportLocalMongoose);

module.exports = mongoose.model('Pirate', PirateSchema);
