const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    articleId: Number,
    link: String,
    title: String,
    content: String,
    date: Date
});

module.exports = mongoose.model('Article', articleSchema);
