var mongoose = require('mongoose');

var treasureSchema = new mongoose.Schema({
  img_url: String,
  name: String,
  description: Text,
  street: String,
  city: String,
  state: String,
  zip: String,
  date: Date,
  archived: Boolean,
  pirate_id: Number
});

var Treasure = mongoose.model(Treasure, treasureSchema);

module.exports = Treasure;
