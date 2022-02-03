const express = require('express');
const router = express.Router({ mergeParams: true });
const _ = require('lodash');

router.get('/', (req, res) => {
  const requestedPostTitle = req.params.postTitle;
  const post = getPost(requestedPostTitle, req.app.locals.posts);
  if (post !== null) {
    res.render('post', { post: post });
  } else {
    res.redirect('/');
  }
});

function getPost(title, posts) {
  title = _.lowerCase(title);
  var post = null;
  posts.forEach(function (item) {
    var itemTitle = _.lowerCase(item.title);
    if (title === itemTitle) {
      post = item;
    }
  });
  return post;
}

module.exports = router;
