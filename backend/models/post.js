const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    //userId: { type: String, require: true},
    title: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true}
    
  
  });

  module.exports = mongoose.model('Post', postSchema);