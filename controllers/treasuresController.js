// add models
var Treasure = require('../models/Treasure');
var Pirate = require('../models/Pirate');

// List all Treasures
var listTreasures = function(req, res, next) {
  Treasure.find(function(error, treasures) {
    if (error) res.json({message: 'Could not find any treasure'});
    res.render('./treasures', {
      title: "Here are our Treasures",
      pirate: req.user, treasures: treasures
    });
  });
};

// Render form for adding a new Treasure
var newTreasureView = function(req, res, next) {
// Exporting User Object with Rendered Views to change displays
  res.render('./treasures/new', {pirate: req.user});
}

// Create a new Treasure
var createTreasure = function(req, res, next) {
  var treasure = new Treasure(
      {
        name: req.body.name,
        description: req.body.description,
        img_url: req.body.img_url,
        cross_street: req.body.cross_street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        pirate_id: req.user.id
      });

  treasure.save(function(error) {
    if (error) res.json({message: 'Could not create treasure because: ' + error});
    res.redirect("./treasures/" + newTreasure.id);
  });
};

// Show a Treasure
var showTreasure = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if(error) res.json({message: 'Could not find treasure because: ' + error});

    // API
    // res.json({treasure: treasure});
    res.render('./treasures/show', {title: "Your New Treasure", pirate: req.user, treasure: treasure});
   });
}

// Render Edit Treasure Form
var editTreasureView = function(req, res, next) {
  var id = req.params.id;
  Treasure.findById({_id: id}, function(error, treasure) {
    if(error) res.json({message: 'Could not edit treasure because: ' + error});
    // API
    // res.json({treasure: treasure});
    res.render('./treasures/edit', {title: "Edit Treasure", treasure: treasure});
   });
}

// UPDATE TREASURE PAGE
var editTreasure = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if (error) res.json({message: 'Could not find treasure because ' + error});

    if (req.body.name) treasure.name = req.body.name;
    if (req.body.description) treasure.description = req.body.description;
    if (req.body.img_url) treasure.img_url= req.body.img_url;
    if (req.body.street) treasure.street= req.body.street;
    if (req.body.city) treasure.city = req.body.city;
    if (req.body.state) treasure.state= req.body.state;
    if (req.body.zip) treasure.zipcode = req.body.zipcode;

    treasure.save(function(error) {
      if (error) res.json({message: 'Treasure successfully updated'});
      res.redirect("./treasures/" + id);
    });
  });
};

// DELETE TREASURE
var removeTreasure = function(req, res, next) {
  var id = req.params.id;

  Treasure.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete treasure because ' + error});

    res.redirect('./treasures/');
    // res.json({message: 'Treasure successfully deleted'});
  });
};

module.exports = {
   listTreasures:    listTreasures,
   newTreasureView:  newTreasureView,
   createTreasure:   createTreasure,
   editTreasureView: editTreasureView,
   editTreasure:     editTreasure,
   showTreasure:     showTreasure,
   removeTreasure:   removeTreasure
}
