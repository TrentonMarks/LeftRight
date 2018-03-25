const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

// NEW ROUTE TO CREATE A POST
router.get('/new', (req, res) => {
    res.render('posts/new.ejs');
});

// CREATE ROUTE TO CREATE NEW POST
router.post('/', (req, res) => {
    User.findOneAndUpdate(
        {_id: req.session.currentUser._id},
        {$push: {img: req.body.img}},
        (err, foundUser) => {
            res.redirect('/');
        }
    );
});

module.exports = router;
