var about = function(req, res, next) {
  res.render('static_pages/about', {title: " AHOY! This be our Crew", pirate: req.user});
}

module.exports = {
  about: about
}
