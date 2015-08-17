// Controller for Pirates/Users
var passport = require('passport');

var Pirate = require('../models/Pirate');

var newRoute = function(req, res) {
  res.render('pirates/new');
};

// Controllers for Pirates

var Pirate = require('../models/Pirate');

var index = function(req, res, next) {
  Pirate.find(function(error, pirates) {
    if (error) res.json({message: 'Could not find any pirate'});
    res.render('./pirates', {title: "Here are our Pirates", pirates: pirates});
  });
}

// NEW PIRATE
var newPirate = function(req, res, next) {
  res.render('./pirates/new');
}

// CREATE PIRATE
var create = function(req, res) {
  Pirate.register(new Pirate({username: req.body.username, email: req.body.email, zipcode: req.body.zipcode}), req.body.password, function(err, pirate) {
      if (err) return res.render('pirates/new', {pirate: pirate});
        passport.authenticate('local')(req, res, function() {
        req.session.save(function(err) {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        });
     });
  });
};

// SHOW PIRATE PAGE
var show = function(req, res, next) {
  var id = req.params.id;

  Pirate.findById({_id: id}, function(error, pirate) {
    if(error) res.json({message: 'Could not find pirate because: ' + error});

    res.json({pirate: pirate});
   });
}


// UPDATE PIRATE PAGE
var edit = function(req, res, next) {
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

// DELETE PIRATE
var remove = function(req, res, next) {
  var id = req.params.id;

  Pirate.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete pirate because ' + error});

    res.json({message: 'Pirate successfully deleted'});
  });
};

module.exports = {
   index: index,
   newPirate: newPirate,
   create: create,
   edit: edit,
   show: show,
   remove: remove
}
