var express = require('express');
var router = express.Router();
//require controllers
var aboutController = require('../controllers/aboutController');
var treasuresController = require('../controllers/treasuresController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* About page */
router.get('/about', aboutController.about);

/* Treasure CRUD */
router.get( '/treasures',             treasuresController.index);
router.get( '/treasures/new',         treasuresController.newTreasure);
router.get( '/treasures/show/id',     treasuresController.show);
router.get( '/treasures/id/edit',     treasuresController.edit);
module.exports = router;
