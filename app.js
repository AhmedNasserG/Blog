const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const lodash = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const composeRoute = require('./routes/compose');

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/compose', composeRoute);

let posts = [];

app.locals = {
  posts: posts
};

app.get('/posts/:postTitle', function (req, res) {
  const requestedPostTitle = req.params.postTitle;
  const post = getPost(requestedPostTitle);
  if (post !== null) {
    res.render('post', { post: post });
  } else {
    res.redirect('/');
  }
});

function getPost(title) {
  title = lodash.lowerCase(title);
  var post = null;
  posts.forEach(function (item) {
    var itemTitle = lodash.lowerCase(item.title);
    if (title === itemTitle) {
      post = item;
    }
  });
  return post;
}

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
