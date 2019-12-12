const models = require('../models');

module.exports = {
    get: {
        shop: (req, res) => {
            models.GameItem.find()
                .then((allItems) => {
                    res.send(allItems);
                })
                .catch((err) => {
                    res.send({ serverMessage: 'Item is successfully bought' });
                    console.error(err);
                });
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
                            .catch((err) => {
                                res.send({ message: 'There is a problem, please try to Buy later.' });
                                console.error(err);
                            });

                        return res.send({ message: 'You bought the Item successfully!' });
                    }

                    return res.send({ message: 'You don\'t have enough Gold to buy the Item.' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Buy later.' });
                    console.error(err);
                });
        },
        inventory: (req, res) => {
            const userId = req.user._id;

            models.GameProfile.findOne({ user: userId })
                .populate('totalItem')
                .then(profile => {
                    res.send(profile.totalItem);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please check the Inventory later.' });
                    console.error(err);
                });
        },
        sell: (req, res) => {
            const userId = req.user._id;
            const itemId = req.params.id;

            Promise.all([
                models.GameProfile.findOne({ user: userId }),
                models.GameItem.findOne({ _id: itemId })
            ])
                .then(([profile, item]) => {
                    const sellItemIndex = profile.totalItem.indexOf(itemId);

                    if (sellItemIndex > -1) {
                        profile.totalItem.splice(sellItemIndex, 1);
                        const sellPrice = Math.ceil(item.price / 2)

                        Promise.resolve(models.GameProfile.updateOne({ user: userId },
                            {
                                totalItem: profile.totalItem,
                                $inc: { totalGold: sellPrice }
                            }
                        ))
                            .catch((err) => {
                                res.send({ message: 'There is a problem, please try to Sell later.' });
                                console.error(err);
                            });

                        return res.send({ message: `You sold the Item successfully for ${sellPrice}!` });
                    }

                    return res.send({ message: 'You don\'t have this Item in your Inventory' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Sell later.' });
                    console.error(err);
                });
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

                            Promise.resolve(models.GameProfile.updateOne({ user: userId },
                                {
                                    totalItem: profile.totalItem,
                                    $push: { equipItem: itemId }
                                }
                            ))
                                .catch((err) => {
                                    res.send({ message: 'There is a problem, please try to Equip later.' });
                                    console.error(err);
                                });

                            return res.send({ message: 'You Equip the Item successfully!' });
                        }

                        return res.send({ message: 'You don\'t have this Item in your Inventory' });
                    }

                    return res.send({ message: 'You cannot Equip more than 3 Items!' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Equip later.' });
                    console.error(err);
                });
        },
        character: (req, res) => {
            const userId = req.user._id;

            models.GameProfile.findOne({ user: userId })
                .populate('equipItem')
                .then((profile) => {
                    res.send(profile.equipItem);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please check the Character later.' });
                    console.error(err);
                });
        },
        remove: (req, res) => {
            const userId = req.user._id;
            const itemId = req.params.id;

            models.GameProfile.findOne({ user: userId })
                .then((profile) => {
                    const removeItemIndex = profile.equipItem.indexOf(itemId);

                    if (removeItemIndex > -1) {
                        profile.equipItem.splice(removeItemIndex, 1);

                        Promise.resolve(models.GameProfile.updateOne({ user: userId },
                            {
                                equipItem: profile.equipItem,
                                $push: { totalItem: itemId }
                            }
                        ))
                            .catch((err) => {
                                res.send({ message: 'There is a problem, please try to Remove later.' });
                                console.error(err);
                            });

                        return res.send({ message: 'You Equipped the Item successfully!' });
                    }

                    return res.send({ message: 'You don\'t have this Item in your Character' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Remove later.' });
                    console.error(err);
                });
        }
    },
    post: {
        save: (req, res) => {
            const userId = req.user._id;
            const { totalItem, totalGold, totalTime, level } = req.body;

            if (totalItem[0]._id) {
                models.GameProfile.updateOne({ user: userId },
                    {
                        $push: {
                            totalItem: totalItem[0]._id,
                            gameHistory: { loot: totalItem[0].itemName, gold: totalGold, time: totalTime, level }
                        },
                        $inc: {
                            totalGold: totalGold,
                            totalTime: totalTime,
                            totalGames: 1
                        }
                    })
                    .then(() => { res.send({ message: 'You Save the Game successfully!' }); })
                    .catch((err) => {
                        res.send({ message: 'There is a problem, cannot Finish the Game!' });
                        console.error(err);
                    });
            } else if (!totalItem[0]._id) {
                models.GameProfile.updateOne({ user: userId },
                    {
                        $push: {
                            gameHistory: { loot: totalItem[0].itemName, gold: totalGold, time: totalTime, level }
                        },
                        $inc: {
                            totalGold: totalGold,
                            totalTime: totalTime,
                            totalGames: 1
                        }
                    })
                    .then(() => { res.send({ message: 'You Save the Game successfully!' }); })
                    .catch((err) => {
                        res.send({ message: 'There is a problem, cannot Finish the Game!' });
                        console.error(err);
                    });
            }
        },
    }
};
