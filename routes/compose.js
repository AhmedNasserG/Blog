const express = require('express');
const router = express.Router();
const Post = require('../database/postModel');

router.get('/', (req, res) => {
  res.render('compose');
});

router.post('/', function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  post.save(function (err) {
    if (!err) {
      res.redirect('/');
    }
  });
});

module.exports = router;
