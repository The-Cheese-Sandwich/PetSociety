const mongoose = require("mongoose");

const trabajoSchema = mongoose.Schema({
    title: { type: String, require: true},
    content: { type: String, require: true}
  
  });

  module.exports = mongoose.model('Post', postSchema);