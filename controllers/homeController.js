var index = function(req, res, next) {
  res.render('index', {title: "Sidewalk Sailors", pirate: req.user} );
}

module.exports = {
  index: index
}
