const Meme = require('../models/Meme');

module.exports = {
    get: {
        all: (req, res) => {
            Meme.find()
            .sort({ date: -1 })
                .then(allMemes => res.send(allMemes))
        }
        // view: (req, res) => {
        // }
    },
    post: {
        add: (req, res) => {
            const { title, imageUrl, _id } = req.body;
            Meme.create({ title, imageUrl, addedBy: _id })
                .then((createdMeme) => { res.send(createdMeme); })
                .catch((err) => { res.send(err); });
        },
        memes: (req, res) => {
            const { itemNumber, pageNumber } = req.body;
            Meme.find()
                .skip(itemNumber * (pageNumber - 1))
                .limit(itemNumber)
                .then(allMemes => res.send(allMemes))
        }
    },
};