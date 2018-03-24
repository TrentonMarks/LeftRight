const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    description: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
