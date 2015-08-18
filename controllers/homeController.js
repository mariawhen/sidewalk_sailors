var index = function(req, res, next) {
  res.render('index', {title: "Sidewalk Sailors", user: req.user} );
}

module.exports = {
  index: index
}
