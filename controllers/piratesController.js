// Controller for Pirates/Users
var passport = require('passport');

var Pirate = require('../models/Pirate');

var newRoute = function(req, res) {
  res.render('pirates/new');
};

var create = function(req, res) {
  Pirate.register(new Pirate({username: req.body.username, email: req.body.email, zipcode: req.body.zipcode}), req.body.password, function(err, pirate) {
      if (err) return res.render('auth/register', {pirate: pirate});
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

module.exports = {
  new: newRoute,
  create: create
};











