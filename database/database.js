const mongoose = require('mongoose');
const Post = require('./postModel');
const Blog = require('./blogModel');

function getPosts() {
  return Post.find({});
}
