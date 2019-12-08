const GameProfile = require('../models/GameProfile');

module.exports = {
    get: {
    },
    post: {
        save: (req, res) => {
            GameProfile.updateOne({ user: req.body._id },
                {
                    $inc: {
                        totalTime: req.body.totalTime,
                        totalGold: req.body.totalGold,
                        totalGames: 1
                    }
                })
                .then(profile => res.json(profile))
                .catch(err => res.send(err));
        },
    }
};