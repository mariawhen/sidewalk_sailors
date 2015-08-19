var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sidewalk_sailors');
console.log('Mongoose connected');
var Pirate = require('./models/Pirate');
var Treasure = require('./models/Treasure');

// Remove all pirates
Pirate.remove({}, function(err, entry) {
    if (err) console.log(err);
    console.log('Pirates cleared out.');
});

Treasure.remove({}, function(err, entry) {
    if (err) console.log(err);
    console.log('Treasures cleared out.');
});

// Let's add some users
var dummyData = function() {};
Pirate.register(new Pirate({
    username: 'bob@bob.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'gary@gary.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'maria@maria.com',
    zipcode: '90001',
    treasure_count: 200
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'mar@gmail.com',
    zipcode: '90001',
    treasure_count: 10
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'abe@gmail.com',
    zipcode: '90001',
    treasure_count: 90
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'rick@rick.com',
    zipcode: '90001',
    treasure_count: 140
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'shep@me.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'one@two.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'howley.phil@gmail.com',
    zipcode: '90001',
    treasure_count: 1000
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'one@maria.com',
    zipcode: '90001',
    treasure_count: 500
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'a@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'b@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'c@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'd@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'e@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'f@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'g@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'h@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'i@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'j@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'k@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'l@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'm@ga.com',
    zipcode: '90076',
    treasure_count: 10
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'n@ga.com',
    zipcode: '90076',
    treasure_count: 20
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'bryan@ga.com',
    zipcode: '90076',
    treasure_count: 60000
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'maria@ga.com',
    zipcode: '90076',
    treasure_count: 700000
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'jaytee@ga.com',
    zipcode: '90076',
    treasure_count: 80000
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'phil@ga.com',
    zipcode: '90076',
    treasure_count: 9000
}), '123', dummyData);

// Let's add some Treasures
var newTreasure = [
  {
    name: "Couch",
    description: "fluffy and white",
    img_url: "http://farm6.static.flickr.com/5111/7245407644_321c720428_m.jpg",
    cross_street: "8th and S Hobart Blvd"
  },{
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
    {
    name: "Couch",
    description: "fluffy and white",
    img_url: "http://farm6.static.flickr.com/5111/7245407644_321c720428_m.jpg",
    cross_street: "8th and S Hobart Blvd"
  },{
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
    {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
    {
    name: "Couch",
    description: "fluffy and white",
    img_url: "http://farm6.static.flickr.com/5111/7245407644_321c720428_m.jpg",
    cross_street: "8th and S Hobart Blvd"
  },{
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Bookcase",
    description: "chair",
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbFncftlp1Clc7pm1kkJ63OcSvfU2Xime-f5m7Ru0_R5so-juS",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VA6FbWhVMC0z2R-TcKoy51MQPN5yCUgIGLjwCkBQZNRWnoUR4g",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VA6FbWhVMC0z2R-TcKoy51MQPN5yCUgIGLjwCkBQZNRWnoUR4g",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://slack-files.com/T0351JZQ0-F098U2U1L-f466baf27b",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSrxT3LmAav5ogIqr2xgT5JZ0QWPOBQt5nhKNkbEF9nay7UJNOWw",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VA6FbWhVMC0z2R-TcKoy51MQPN5yCUgIGLjwCkBQZNRWnoUR4g",
    cross_street: "8th and S Hobart Blvd"
  },
  {
    name: "Sofa",
    description: "chair",
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbFncftlp1Clc7pm1kkJ63OcSvfU2Xime-f5m7Ru0_R5so-juS",
    cross_street: "8th and S Hobart Blvd"
  }
];

Treasure.create(newTreasure, function(err, treasures){
  if (err) console.log(err);
  console.log(Treasures.length + 'Treasures created!');
  mongoose.disconnect();
});

console.log('Disconnected from MongoDB.');
