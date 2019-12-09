const mongoose = require('mongoose');

const gameProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalGames: { type: Number, required: true, default: 0 },
    totalTime: { type: Number, required: true, default: 0 },
    totalGold: { type: Number, required: true, default: 0 },
    gameHistory: [],
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameItem' }]
});

const GameProfile = mongoose.model('GameProfile', gameProfileSchema);

module.exports = GameProfile;