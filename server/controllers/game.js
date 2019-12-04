const GameProfile = require('../models/GameProfile');

module.exports = {
    get: {
    },
    post: {
        save: (req, res) => {
            console.log('server save', req.body)
            GameProfile.updateOne(
                { user: req.body._id },
                {
                    $inc: {
                        totalTime: req.body.data.totalTime,
                        totalGold: req.body.data.totalGold,
                        totalGames: 1
                    }
                })
                .then(profile => {
                    console.log(profile)
                    res.json(profile)
                });
            // GameProfile.findByIdAndUpdate(req.body.id, req.body.data)
            //     .then(test => {
            //         console.log('game------------', test);
            //         res.json({ status: 'Success' });
            //     })
            //     .catch(err => console.log(err));
        }
    },
};