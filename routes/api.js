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

router
	.route('/posts/:postId')
	.get((req, res) => {
		Post.findOne({ _id: req.params.postId }, (err, foundPost) => {
			if (!err) {
				res.send(foundPost);
			} else {
				res.send(err);
			}
		});
	})
	.put((req, res) => {
		Post.updateOne(
			{ _id: req.params.postId },
			{ title: req.body.title, content: req.body.content },
			(err) => {
				if (!err) {
					res.send('the post has been updated');
				} else {
					res.send(err);
				}
			}
		);
	})
	.patch((req, res) => {
		Post.updateOne({ _id: req.params.postId }, { $set: req.body }, (err) => {
			if (!err) {
				res.send('the post has been updated');
			} else {
				res.send(err);
			}
		});
	})
	.delete((req, res) => {
		Post.deleteOne({ _id: req.params.postId }, (err) => {
			if (!err) {
				res.send('the post has been deleted');
			} else {
				res.send(err);
			}
		});
	});

module.exports = router;
