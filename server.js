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
// Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Static Files
app.use(express.static('public'));
// Express-Session
app.use(session({
    secret: 'Trent <3 Aubrey',
    resave: false,
    saveUninitialized: false
}));


// INDEX ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs');
});


// CONTROLLERS
// Users
const usersController = require('./controllers/users.js');
app.use('/users', usersController);
// Sessions
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


// CONNECTIONS
app.listen(3000, () => {
    console.log('Trent <3 Aubrey');
});
// Mongoose
mongoose.connect('mongodb://localhost:27017/leftright');
mongoose.connection.once('open', () => {
    console.log('Connected to mongo!');
});
