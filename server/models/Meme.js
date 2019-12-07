const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'You should write something for title'],
    },
    imageUrl: {
        type: String,
        required: [true, 'You should write something for imageUrl'],
    },
    date: {
        type: Date,
        required: true,
        default: () => Date.now() + 2 * 60 * 60 * 1000
    },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;