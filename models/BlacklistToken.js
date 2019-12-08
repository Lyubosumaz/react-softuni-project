const mongoose = require('mongoose');

const blacklistToken = new mongoose.Schema({
    token: { type: String }
});

const BlacklistToken = mongoose.model('BlacklistToken', blacklistToken);

module.exports = BlacklistToken;
