let mongoose = require('mongoose');



let Collectionname = "business"



let businessModelSchema = mongoose.Schema({

  id: String,
  contactName: String,
  contactNumber: String,
  email: String,

}, {
  collection: Collectionname
});

let CollectionSchema = businessModelSchema


module.exports = mongoose.model(Collectionname, CollectionSchema);