const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
