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
            const userId = req.body._id;
            const { totalItem, totalGold, totalTime, level } = req.body;

            GameProfile.updateOne({ user: userId },
                {
                    $addToSet: { gameHistory: { loot: totalItem[0], gold: totalGold, time: totalTime, level } },
                    $push: { totalItem: req.body.totalItem[0] },
                    $inc: {
                        totalGold: req.body.totalGold,
                        totalTime: req.body.totalTime,
                        totalGames: 1
                    }
                })
                .then((profile) => { res.json(profile); })
                .catch((err) => { res.send(err); });
        },
    }
};