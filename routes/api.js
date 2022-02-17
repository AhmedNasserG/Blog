const express = require('express');
const router = express.Router();
const Post = require('../database/postModel');

router
	.route('/posts')
	.get((req, res) => {
		Post.find((err, foundPosts) => {
			if (!err) {
				res.send(foundPosts);
			} else {
				res.send(err);
			}
		});
	})
	.post((req, res) => {
		const newPost = new Post({ title: req.body.title, content: req.body.content });
		newPost.save((err) => {
			if (!err) {
				res.send('the post has been added');
			} else {
				res.send(err);
			}
		});
	})
	.delete((req, res) => {
		Post.deleteMany((err) => {
			if (!err) {
				res.send('all posts have been deleted');
			} else {
				res.send(err);
			}
		});
	});

module.exports = router;
