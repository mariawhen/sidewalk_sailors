var about = function(req, res, next) {
  res.render('static_pages/about', {title: "About our crew."});
}

module.exports = {
  about: about
}
