var mongoose = require('mongoose');
  // mongoose.connect('mongodb://localhost:27017/sidewalk_sailors');
  console.log('Mongoose connected');
var Pirate = require('./models/Pirate');

Pirate.remove({}, function(err, entry){
  if (err) console.log(err);
  console.log('Entries cleared out.');
});

var newPirates = [
  {
    username: 'Jeong@Sparrow.com',
    password: "123",
    zipcode: "90210",
    treasure_count: 1
  },
  {
    username: 'B@Beard.com',
    password: "123",
    zipcode: "92302",
    treasure_count: 8
  },
  {
    username: 'Ann@Bonnie.com',
    password: "123",
    zipcode: "90001",
    treasure_count: 9
  },
  {
    username: 'Swolliam@Wallace.com',
    password: "123",
    zipcode: "98019",
    treasure_count: 2
  }
];

Pirate.create(newPirates, function(err, pirates){
  if (err) console.log(err);
  console.log(Pirates.length + 'Pirates created!');
  mongoose.disconnect();
});

console.log('Disconnected from MongoDB.');
