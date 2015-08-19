var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var PirateSchema = new mongoose.Schema({
  zipcode: String,
  treasure_count: Number,
  avatar: {type: String, default: 'https://bp-v-newproduction.s3.amazonaws.com/uploads/social_user/user_avatar/101793/tiny_1402874553-avatar-khurney.jpg'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

PirateSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Pirate', PirateSchema);
