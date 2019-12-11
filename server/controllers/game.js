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

            Promise.all([
                models.GameProfile.findOne({ user: userId }),
                models.GameItem.findOne({ _id: itemId })
            ])
                .then(([profile, item]) => {
                    if (profile.totalGold >= item.price) {
                        Promise.resolve(models.GameProfile.updateOne({ user: userId },
                            {
                                $push: { totalItem: item._id },
                                $inc: { totalGold: item.price * -1 }
                            }
                        ))
                        return res.send({ message: 'Item is successfully bought' });
                    }
                    return res.send({ message: 'You don\'t have enough gold to buy the item' });
                })
                .catch((err) => { res.send(err); });
        },
        inventory: (req, res) => {
            const userId = req.user._id;

            models.GameProfile.findOne({ user: userId })
                .populate('totalItem')
                .then(profile => {
                    res.send(profile.totalItem);
                })
                .catch((err) => { res.send(err); });
        },
        sell: (req, res) => {
            const userId = req.user._id;
            const itemId = req.params.id;
        
            Promise.all([
                models.GameProfile.findOne({ user: userId }),
                models.GameItem.findOne({ _id: itemId })
            ]).then(([profile, item]) => {
                const sellItemIndex = profile.totalItem.indexOf(itemId);

                if (sellItemIndex > -1) {
                    profile.totalItem.splice(sellItemIndex, 1);
                }

                const sellPrice = Math.ceil(item.price / 2)
                Promise.resolve(models.GameProfile.updateOne({ user: userId },
                    {
                        totalItem: profile.totalItem,
                        $inc: { totalGold: sellPrice }
                    }
                ))
                return res.send({ message: `You sold the item successfully for ${sellPrice}!` });
            })
        },
        equip: (req, res) => {
            const userId = req.user._id;
            const itemId = req.params.id;

            models.GameProfile.findOne({ user: userId })
                .then((profile) => {
                    if (profile.equipItem.length < 3) {
                        const equipItemIndex = profile.totalItem.indexOf(itemId);

                        if (equipItemIndex > -1) {
                            profile.totalItem.splice(equipItemIndex, 1);
                        }

                        Promise.resolve(models.GameProfile.updateOne({ user: userId },
                            {
                                totalItem: profile.totalItem,
                                $push: { equipItem: itemId }
                            }
                        ));
                        return res.send({ message: 'Successfully equip item' });
                    }
                    return res.send({ message: 'You cannot equip more than 3 items' });
                })
                .catch((err) => { res.send(err); });
        },
    },
    post: {
        save: (req, res) => {
            const userId = req.body._id;
            const { totalItem, totalGold, totalTime, level } = req.body;

            if (req.body.totalItem[0]._id) {
                models.GameProfile.updateOne({ user: userId },
                    {
                        $push: {
                            totalItem: req.body.totalItem[0]._id,
                            gameHistory: { loot: totalItem[0].itemName, gold: totalGold, time: totalTime, level }
                        },
                        $inc: {
                            totalGold: req.body.totalGold,
                            totalTime: req.body.totalTime,
                            totalGames: 1
                        }
                    })
                    .then((profile) => { res.json(profile); })
                    .catch((err) => { res.send(err); });
            } else if (!req.body.totalItem[0]._id) {
                models.GameProfile.updateOne({ user: userId },
                    {
                        $push: {
                            gameHistory: { loot: totalItem[0].itemName, gold: totalGold, time: totalTime, level }
                        },
                        $inc: {
                            totalGold: req.body.totalGold,
                            totalTime: req.body.totalTime,
                            totalGames: 1
                        }
                    })
                    .then((profile) => { res.json(profile); })
                    .catch((err) => { res.send(err); });
            }
        },
    }
};