const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');

// NEW ROUTE TO CREATE A POST
router.get('/new', (req, res) => {
    res.render('posts/new.ejs');
});

// CREATE ROUTE TO CREATE NEW POST
router.post('/', (req, res) => {
    Post.create(req.body, (err, product) => {
        res.redirect('/');
    });
});

module.exports = router;
