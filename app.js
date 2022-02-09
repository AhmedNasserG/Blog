const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const composeRoute = require('./routes/compose');
const postRoute = require('./routes/post');

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/compose', composeRoute);
app.use('/posts/:postId', postRoute);

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
