const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');


// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

// CREATE ROUTE
router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        res.redirect('/');
    });
});

// DELETE ROUTE
// When user clicks on 'Delete Account' in 'Edit Profile' form, this route deletes the user's account and logs out
router.delete('/', (req, res,) => {
    User.findOneAndRemove(req.session.currentUser, (err, data) => {
        req.session.destroy(()=>{
            res.redirect('/');
        });
    });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    User.find(req.session.currentUser, (err, foundUser) => {
        res.render('users/edit.ejs', {
            foundUser: foundUser
        });
    });
});

// UPDATE ROUTE
router.put('/', (req, res) => {
    User.findOneAndUpdate(
        req.session.currentUser.username,
        req.body,
        {new: true},
        (err, updatedModel) => {
            res.redirect('/');
        });
    });

module.exports = router;
