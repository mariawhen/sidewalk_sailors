var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var PirateSchema = new mongoose.Schema({

  zipcode: String,
  treasure_count: Number,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

PirateSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Pirate', PirateSchema);
