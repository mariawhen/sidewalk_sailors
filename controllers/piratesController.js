var passport = require('passport');

// require models
var Pirate = require('../models/Pirate');

// List all Pirates
var listPirates = function(req, res, next) {
  Pirate.find(function(error, pirates) {
    if (error) res.json({message: 'Could not find any pirate'});
    res.render('./pirates', {
      title: "Here are our Pirates",
      pirates: pirates,
      pirate: req.user
    });
  });
};

// Render form for adding a new Pirate
var newPirateView = function(req, res, next) {
  res.render('./pirates/new', {pirate: req.user});
}

// Create a new Pirate
var createPirate = function(req, res) {
  Pirate.register(new Pirate(
    {
      username: req.body.username,
      zipcode: req.body.zipcode
    }), req.body.password, function(err, pirate) {
      if (err) return res.render('pirates/new',
        {pirate: pirate});
        passport.authenticate('local')(req, res, function() {
          req.session.save(function(err) {
            if (err) {
              return next(err);
            }
            res.redirect('/pirates/' + req.user.id);
        });
     });
  });
};

// Render Edit Pirate Form
var editPirateView = function(req, res, next) {
  var id = req.params.id;
  Pirate.findById({_id: id}, function(error, pirate) {
    // delete this comment is the code works
    // if(error) res.json({message: 'Could not edit pirate because: ' + error});
    // res.render(
    //   'pirates/:id', {
    //     pirate: pirate
    //   }
    // )
    if(error) res.json({message: 'Could not edit pirate because: ' + error});
    // API
    // res.json({pirate: pirate});
    res.render('./pirates/edit', {title: "Edit Pirate", pirate: pirate});
   });
}

// UPDATE PIRATE PAGE
var editPirate = function(req, res, next) {
  var id = req.params.id;

  Pirate.findById({_id: id}, function(error, pirate) {
    if (error) res.json({message: 'Could not find pirate because ' + error});

    if (req.body.username) pirate.username = req.body.username;
    if (req.body.email) pirate.email = req.body.email;
    if (req.body.password) pirate.password= req.body.password;
    if (req.body.zipcode) pirate.zipcode = req.body.zipcode;

    pirate.save(function(error) {
      if (error) res.json({message: 'Pirate successfully updated'});
    });
  });
};

// Show a Pirate
var showPirate = function(req, res, next) {
  var id = req.params.id;

  Pirate.findById({_id: id}, function(error, pirate) {
    if(error) res.json({message: 'Could not find pirate because: ' + error});
    res.render(
      './pirates/show', {
        pirate: req.user
      }
    )
    // API
    // res.json({pirate: pirate});
   });
}

// Remove a Pirate
var removePirate = function(req, res, next) {
  var id = req.params.id;

  Pirate.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete pirate because ' + error});

    res.json({message: 'Pirate successfully deleted'});
  });
};

module.exports = {
   listPirates:     listPirates,
   newPirateView:   newPirateView,
   createPirate:    createPirate,
   editPirateView:  editPirateView,
   editPirate:      editPirate,
   showPirate:      showPirate,
   removePirate:    removePirate
}
