const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

// CREATE ROUTE
router.post('/', (req, res) => {
    User.findOne(
        {username: req.body.username}, (err, foundUser) => {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.redirect('/');
            } else {
                res.send('Wrong Password');
            }
        }
    );
});

// // EDIT ROUTE
// router.get('/edit', (req, res) => {
//     User.find({}, (err, foundUser) => {
//         res.render('sessions/edit.ejs', {username: req.body.username});
//     });
// });

// UPDATE ROUTE
// router.put('/', (req, res) => {
//     User.findByIdAndSave({}, req.body.username, {new:true}, (err, updatedModel) => {
//         res.redirect('/');
//     });
// });

// DESTROY ROUTE
router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;
