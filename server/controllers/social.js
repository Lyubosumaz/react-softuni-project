const Meme = require('../models/Meme');

const models = require('../models');

module.exports = {
    get: {
        all: (req, res) => {
            Meme.find()
                .sort({ date: -1 })
                .then(allMemes => res.send(allMemes))
        },
        view: (req, res) => {
            const memeId = req.params.id;

            Meme.findById({ _id: memeId })
                .then((meme) => { res.send(meme); })
                .catch((err) => { res.send(err); });
        },
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
        },
    },
    edit: (req, res) => {
        const { title, imageUrl } = req.body;
        const memeId = req.params.id

        models.Meme.findByIdAndUpdate({ _id: memeId }, { title, imageUrl })
            .then((editedMeme) => { res.send(editedMeme) })
            .catch((err) => { res.send(err); });
    },
    delete: (req, res) => {
        const memeId = req.params.id

        models.Meme.deleteOne({ _id: memeId })
            .then((removedMeme) => { res.send(removedMeme); })
            .catch((err) => { res.send(err); });
    },
};