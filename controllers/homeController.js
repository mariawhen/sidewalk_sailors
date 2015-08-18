var Treasure = require('../models/Treasure');

var index = function(req, res, next) {
    Treasure.find(function(error, treasures) {
    if (error) res.json({message: 'Could not find any treasure'});
    res.render('index', {title: "Sidewalk Sailors", pirate: req.user, treasures: treasures} );
  });
}


module.exports = {
  index: index
}
