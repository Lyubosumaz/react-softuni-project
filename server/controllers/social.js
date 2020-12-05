const models = require('../models');

module.exports = {
    get: {
        view: (req, res) => {
            const memeId = req.params.id;

            models.Meme.findById({ _id: memeId })
                .then((oneMeme) => {
                    res.send(oneMeme);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to View meme later.' });
                    console.error(err);
                });
        },
        all: (req, res) => {
            models.Meme.find()
                .then((allMemes) => {
                    res.send(allMemes);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Social later.' });
                    console.error(err);
                });
        },
    },
    post: {
        scroll: (req, res) => {
            const { itemNumber, pageNumber } = req.body;

            models.Meme.find()
                .sort({ updatedAt: -1 })
                .skip(itemNumber * (pageNumber - 1))
                .limit(itemNumber)
                .then((allMemes) => {
                    res.send(allMemes);
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try later.' });
                    console.error(err);
                });
        },
        add: (req, res) => {
            const userId = req.user._id;
            const { title, imageUrl, imageWidth, imageHeight, imageRatio, imageOrientation, imageAltName } = req.body;

            models.Meme.create({ title, imageUrl, imageWidth, imageHeight, imageRatio, imageOrientation, imageAltName, addedBy: userId })
                .then(() => {
                    res.send({ message: 'You Added the meme successfully!' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Add meme later.' });
                    console.error(err);
                });
        },
    },
    put: {
        edit: (req, res) => {
            const memeId = req.params.id;
            const { title, imageUrl } = req.body;

            models.Meme.findByIdAndUpdate({ _id: memeId }, { title, imageUrl })
                .then(() => {
                    res.send({ message: 'You Edited the meme successfully!' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Edit meme later.' });
                    console.error(err);
                });
        },
    },
    delete: {
        delete: (req, res) => {
            const memeId = req.params.id;

            models.Meme.deleteOne({ _id: memeId })
                .then(() => {
                    res.send({ message: 'You Deleted the meme successfully!' });
                })
                .catch((err) => {
                    res.send({ message: 'There is a problem, please try to Delete meme later.' });
                    console.error(err);
                });
        },
    },
};
