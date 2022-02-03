const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const lodash = require('lodash');

const contactContent =
  'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

app.use('/', homeRoute);
app.use('/about', aboutRoute);

app.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactContent });
});

app.get('/compose', function (req, res) {
  res.render('compose');
});

app.post('/compose', function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect('/');
});

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
