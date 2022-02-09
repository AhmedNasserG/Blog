const express = require('express');
const router = express.Router({ mergeParams: true });
const _ = require('lodash');
const Post = require('../database/postModel');

router.get('/', (req, res) => {
  postId = req.params.postId;
  Post.findOne({ _id: postId }, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      res.render('post', {
        post: post
      });
    }
  });
});

module.exports = router;
