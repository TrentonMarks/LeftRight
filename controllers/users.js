const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

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
router.delete('/:id', (req, res,) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/');
    })
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    User.find(req.body.username, (err, foundUser) => {
        res.render('users/edit.ejs', {
            username: foundUser
        });
    });
});
//
// // UPDATE ROUTE
// router.put('/', (req, res) => {
//     User.findByIdAndSave({}, req.body.username, {new:true}, (err, updatedModel) => {
//         res.redirect('/');
//     });
// });



module.exports = router;
