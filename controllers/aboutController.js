var about = function(req, res, next) {
  res.render('static_pages/about', {title: "About our crew.", user: req.user});
}

module.exports = {
  about: about
}
