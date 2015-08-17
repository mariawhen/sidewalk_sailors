// Controllers for Treasures

var Treasure = require('../models/Treasure');

var index = function(req, res, next) {
  Treasure.find(function(error, treasures) {
    if (error) res.json({message: 'Could not find any treasure'});
    res.render('./treasures', {title: "Here are our Treasures", treasures: treasures});
  });
}

// NEW TREASURE
var newTreasure = function(req, res, next) {
  res.render('./treasures/new');
}

// CREATE TREASURE
var create = function(req, res, next) {
  var treasure = new Treasure(req.body.treasure);

  treasure.save(function(error) {
    if (error) res.json({message: 'Could not create treasure because: ' + error});
    res.redirect("./treasures");
  });
};

// SHOW TREASURE PAGE
var show = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if(error) res.json({message: 'Could not find treasure because: ' + error});

    res.json({treasure: treasure});
   });
}


// UPDATE TREASURE PAGE
var edit = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if (error) res.json({message: 'Could not find treasure because ' + error});

    if (req.body.name) treasure.name = req.body.name;
    if (req.body.description) treasure.description = req.body.description;
    if (req.body.street) treasure.street= req.body.street;
    if (req.body.city) treasure.city = req.body.city;
    if (req.body.state) treasure.state= req.body.state;
    if (req.body.zip) treasure.zip = req.body.zip;

    treasure.save(function(error) {
      if (error) res.json({message: 'Treasure successfully updated'});
    });
  });
};

// DELETE TREASURE
var remove = function(req, res, next) {
  var id = req.params.id;

  Treasure.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete treasure because ' + error});

    res.json({message: 'Treasure successfully deleted'});
  });
};

module.exports = {
   index: index,
   newTreasure: newTreasure,
   create: create,
   edit: edit,
   show: show,
   remove: remove
}
