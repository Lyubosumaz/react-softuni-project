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
            console.log(req.body)

            GameProfile.updateOne({ user: req.body._id },
                {
                    $addToSet: { totalItem: req.body.totalItem },
                    $inc: {
                        totalTime: req.body.totalTime,
                        totalGold: req.body.totalGold,
                        totalGames: 1
                    }
                })
                .then((profile) => {
                    console.log(profile)
                    res.json(profile); })
                .catch((err) => { res.send(err); });
        },
    }
};