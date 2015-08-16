var express = require('express');
var router = express.Router();
//require controllers
var aboutController = require('../controllers/aboutController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* About page */
router.get('/about', aboutController.about);

module.exports = router;
