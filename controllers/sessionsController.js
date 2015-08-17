var passport = require('passport');

var Pirate = require('../models/Pirate');

var newRoute = function(req, res) {
  res.render('sessions/new', {pirate: req.pirate});
};

var create = function(req, res, next) {
  req.session.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
};

var destroy = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = {
  new: newRoute,
  create: create,
  destroy: destroy
};
