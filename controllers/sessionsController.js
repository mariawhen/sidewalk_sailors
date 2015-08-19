var passport = require('passport');

var Pirate = require('../models/Pirate');

var newSessionView = function(req, res) {
  res.render('sessions/new', {pirate: req.pirate});
};

var createSession = function(req, res, next) {
  req.session.save(function(err) {
    if (err) return next(err);

    res.redirect('/pirates/' + req.user.id);
  });
};

var destroySession = function(req, res) {
  // req.logOut();
  // res.redirect('/');
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
};

module.exports = {
  newSessionView: newSessionView,
  createSession: createSession,
  destroySession: destroySession
};
