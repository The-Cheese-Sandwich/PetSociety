const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    //userId: { type: String, require: true},
    title: { type: String, require: true},
    image: { type: String, require: true},
    description: { type: String, require: true}
    
  
  });

  module.exports = mongoose.model('Post', postSchema);