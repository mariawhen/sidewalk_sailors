var index = function(req, res, next) {
  res.render('index', {title: "Sidewalk Sailors"});
}

module.exports = {
  index: index
}
