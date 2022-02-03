const mongoose = require('mongoose');
const Post = require('./postModel');

const blogSchema = new mongoose.Schema({
  posts: [Post.Schema],
  about: String,
  contact: String
});

module.exports = mongoose.model('Blog', blogSchema);
