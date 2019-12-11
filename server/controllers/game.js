const models = require('../models');

module.exports = {
    get: {
        shop: (req, res) => {
            models.GameItem.find()
                .then((items) => { res.send(items); })
                .catch((err) => { res.send(err); });
        },
        buy: (req, res) => {
            const userId = req.user._id;
            const itemId = req.params.id;
            models.GameItem.findOne({ _id: itemId })
                .then((item) => {
                    models.GameProfile.updateOne({ user: userId }, { $push: { totalItem: item.itemName } })
                        .then(() => {
                            res.send({ message: 'Item is successfully bought' });

                        })
                        .catch((err) => { res.send(err); });
                })
                .catch((err) => { res.send(err); });
        },
    },
    post: {
        save: (req, res) => {
            const userId = req.body._id;
            const { totalItem, totalGold, totalTime, level } = req.body;

            models.GameProfile.updateOne({ user: userId },
                {
                    $push: {
                        totalItem: req.body.totalItem[0],
                        gameHistory: { loot: totalItem[0], gold: totalGold, time: totalTime, level }
                    },
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