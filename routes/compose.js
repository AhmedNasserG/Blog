const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('compose');
});

router.post('/', function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  req.app.locals.posts.push(post);
  res.redirect('/');
});

module.exports = router;
