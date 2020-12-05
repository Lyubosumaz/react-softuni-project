const mongoose = require('mongoose');

const blacklistToken = new mongoose.Schema(
    {
        token: { type: String },
    },
    {
        timestamps: true,
    }
);

const BlacklistToken = mongoose.model('BlacklistToken', blacklistToken);

module.exports = BlacklistToken;
