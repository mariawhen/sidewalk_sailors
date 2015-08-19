var express  = require('express'),
    passport = require('passport'),
    methodOverride = require('method-override');

// required models
var Pirate   = require('../models/Pirate');
var db = require('../models/db');

// router
var router   = express.Router();

//require controllers
var homeController      = require('../controllers/homeController'),
    aboutController     = require('../controllers/aboutController'),
    treasuresController = require('../controllers/treasuresController'),
    piratesController   = require('../controllers/piratesController'),
    sessionsController  = require('../controllers/sessionsController');

/*======================================
=            Authentication            =
======================================*/

var authenticatePirate  = passport.authenticate(
  'local',
  {
    // successRedirect: '/pirates',
    failureRedirect: '/login'}
);

var isLoggedIn = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  }
  return next();
};

var loadCurrentPirate = function(req, res, next) {
  if (req.session.passport) {
    Pirate
       .findOne({ username: req.session.passport.user })
       .then(
         function(user) {
          // attach the current User instance to the request
          req.currentUser = user;
          next();
         }, function(err) {
          return next(err);
         });
  } else {
    next();
  }
};

/*=============================
=            LOGIN            =
=============================*/

router.get('/login',     sessionsController.newSessionView);
router.post('/login',    authenticatePirate, sessionsController.createSession);

/*==============================
=            LOGOUT            =
==============================*/

router.get('/logout',    sessionsController.destroySession);

/*================================
=            REGISTER            =
================================*/

router.get('/register',  piratesController.newPirateView);
router.post('/register', piratesController.createPirate);


/*-----  End of Authentication  ------*/

/*=================================
=            HOME PAGE            =
=================================*/

/* Home page */
router.get('/', homeController.index);

/*==================================
=            ABOUT PAGE            =
==================================*/

/* About page */
router.get('/about', aboutController.about);

/*===================================
=            PIRATE CRUD            =
===================================*/

// show all the pirates
router.get('/pirates',          isLoggedIn, piratesController.listPirates);
// render the new pirate form
router.get('/pirates/new',      isLoggedIn, piratesController.newPirateView);
// create a pirate
router.post('/pirates/',        isLoggedIn, piratesController.createPirate);
// show the pirate
router.get('/pirates/:id',      isLoggedIn, piratesController.showPirate);
// render the edit pirate form
router.get('/pirates/:id/edit', isLoggedIn, piratesController.editPirateView);
// edit a pirate
router.put('/pirates/:id/',     isLoggedIn, piratesController.editPirate);
// delete a pirate
router.delete('/pirates/:id/',  isLoggedIn, piratesController.removePirate);

/*=====================================
=            TREASURE CRUD            =
=====================================*/

// show all treasures
router.get('/treasures',          /*isLoggedIn,*/ treasuresController.listTreasures);
// show the add treasure form
router.get('/treasures/new',      isLoggedIn, treasuresController.newTreasureView);
// create a new treasure
router.post('/treasures',         isLoggedIn, treasuresController.createTreasure);
// show a treasure
router.get('/treasures/:id',      isLoggedIn, treasuresController.showTreasure);
// render the edit treasure form
router.get('/treasures/:id/edit', isLoggedIn, treasuresController.editTreasureView);
// update the treasure item
router.put('/treasures/:id/',     isLoggedIn, treasuresController.editTreasure);
// delete the treasure item
router.delete('/treasures/:id',   isLoggedIn, treasuresController.removeTreasure);

// export router to app
module.exports = router;
