// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');

// MIDDLEWARE
// Method Override
app.use(methodOverride('_method'));
// Express-Session
app.use(session({
    secret: 'Trent <3 Aubrey',
    resave: false,
    saveUninitialized: false
}));
// Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Static Files
app.use(express.static('public'));

// CONNECTIONS
app.listen(3000, () => {
    console.log('Trent <3 Aubrey');
});

mongoose.connect('mongodb://localhost:27017/leftright');
mongoose.connection.once('open', () => {
    console.log('Connected to mongo!');
});