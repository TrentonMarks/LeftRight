const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');

// NEW ROUTE TO CREATE A POST
router.get('/new', (req, res) => {
    res.render('posts/new.ejs');
});

// CREATE ROUTE TO CREATE NEW POST (NOT PUSHING DATA TO DB)
router.post('/posts', (req, res) => {
    Post.create(req.body, (err, newPost) => {
        res.send('POSTTTTT');
    });
});

module.exports = router;
