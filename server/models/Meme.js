const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;