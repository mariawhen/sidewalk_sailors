// Controllers for Treasures

var Treasure = require('../models/Treasure');
var Pirate = require('../models/Pirate');


var index = function(req, res, next) {
  Treasure.find(function(error, treasures) {
    if (error) res.json({message: 'Could not find any treasure'});
    res.render('./treasures', {title: "Here are our Treasures", treasures: treasures, user: req.user});
  });
}

// NEW TREASURE
var newTreasure = function(req, res, next) {
  res.render('./treasures/new');
}

// CREATE TREASURE
var create = function(req, res, next) {
  // console.log('in POST');
  // console.log('body:',req.user.id);
  // console.log(res);
  var newTreasure = new Treasure({name: req.body.name,
                              description: req.body.description,
                              img_url: req.body.img_url,
                              street: req.body.street,
                              city: req.body.city,
                              state: req.body.state,
                              zipcode: req.body.zipcode,
                              pirate_id: req.user.id}
                              );
  //newTreasure.username = req.user.id;

  newTreasure.save(function(error) {
    if (error) res.json({message: 'Could not create treasure because: ' + error});
    // res.redirect("./treasures/" + newTreasure.id);
    res.redirect("./treasures/" + newTreasure.id);
  });
};

// var create = function(req, res, next) {
//   var newComment = req.body.comment;
//   newComment.username = req.user.name;

//   Comment
//     .create(newComment)
//     .then(
//       function(comment) {
//         res.redirect('/comments/' + comment.id);
//       }, function(err) {
//         return next(err);
//     });
// };

// SHOW TREASURE PAGE
var show = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if(error) res.json({message: 'Could not find treasure because: ' + error});
    // api time below yo
    // res.json({treasure: treasure});
    res.render('./treasures/show', {title: "Your New Treasure", user: req.user, treasure: treasure});
   });
}


// UPDATE TREASURE PAGE
var edit = function(req, res, next) {
  var id = req.params.id;

  Treasure.findById({_id: id}, function(error, treasure) {
    if (error) res.json({message: 'Could not find treasure because ' + error});

    if (req.body.name) treasure.name = req.body.name;
    if (req.body.description) treasure.description = req.body.description;
    if (req.body.street) treasure.street= req.body.street;
    if (req.body.city) treasure.city = req.body.city;
    if (req.body.state) treasure.state= req.body.state;
    if (req.body.zip) treasure.zip = req.body.zip;

    treasure.save(function(error) {
      if (error) res.json({message: 'Treasure successfully updated'});
    });
  });
};

// DELETE TREASURE
var remove = function(req, res, next) {
  var id = req.params.id;

  Treasure.remove({_id: id}, function(error) {
    if (error) res.json({message: 'Could not delete treasure because ' + error});

    res.json({message: 'Treasure successfully deleted'});
  });
};

module.exports = {
   index: index,
   newTreasure: newTreasure,
   create: create,
   edit: edit,
   show: show,
   remove: remove
}
