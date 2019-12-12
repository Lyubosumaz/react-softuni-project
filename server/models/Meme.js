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
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
