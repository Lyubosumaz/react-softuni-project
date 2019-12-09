const GameProfile = require('../models/GameProfile');
const GameItem = require('../models/GameItem');

module.exports = {
    get: {
        shop: (req, res) => {
            GameItem.find()
                .then((items) => { res.send(items); })
                .catch((err) => { res.send(err); });
        }
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
                .then((profile) => { res.json(profile); })
                .catch((err) => { res.send(err); });
        },
    }
};