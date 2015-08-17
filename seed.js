var mongoose = require('mongoose');

var Pirate = require('./models/Pirate');

Pirate.remove({}, function(err, entry){
  if (err) console.log(err);
  console.log('Entries cleared out.');
});

var newPirates = [
{
  username: 'Jong Sparrow',
  zipcode: 90210,
  treasure_count: 1
},
{
  username: 'B Beard',
  zipcode: 92302,
  treasure_count: 8
},
{
  username: 'Ann Bonnie',
  zipcode: 90001,
  treasure_count: 9
},
{
  username: 'Swolliam Wallace',
  zipcode: 98019,
  treasure_count: 2
}
];

Pirate.create(newPirates, function(err, pirates){
  if (err) console.log(err);
  console.log(Pirates.length + 'Pirates created!');
  mongoose.disconnect();
});

console.log('Disconnected from MongoDB.');
