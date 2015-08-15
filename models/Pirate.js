var mongoose = require('mongoose');

var pirateSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  zipcode: String,
  treasure_count: Number
});

var Pirate = mongoose.model('Pirate', pirateSchema);

module.exports = Pirate;
