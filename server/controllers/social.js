const models = require('../models');

module.exports = {
    get: {
        view: (req, res) => {
            const memeId = req.params.id;

            models.Meme.findById({ _id: memeId })
                .then((meme) => { res.send(meme); })
                .catch((err) => { res.send(err); });
        },
    },
    post: {
        add: (req, res) => {
            const { title, imageUrl, _id } = req.body;

            models.Meme.create({ title, imageUrl, addedBy: _id })
                .then((createdMeme) => { res.send(createdMeme); })
                .catch((err) => { res.send(err); });
        },
        scroll: (req, res) => {
            const { itemNumber, pageNumber } = req.body;
       
            models.Meme.find()
                .sort({ updatedAt: -1 })
                .skip(itemNumber * (pageNumber - 1))
                .limit(itemNumber)
                .then((allMemes) => { res.send(allMemes); })
                .catch((err) => { res.send(err); });
        },
    },
    put: {
        edit: (req, res) => {
            const memeId = req.params.id
            const { title, imageUrl } = req.body;

            models.Meme.findByIdAndUpdate({ _id: memeId }, { title, imageUrl })
                .then((editedMeme) => { res.send(editedMeme); })
                .catch((err) => { res.send(err); });
        },
    },
    delete: {
        delete: (req, res) => {
            const memeId = req.params.id

            models.Meme.deleteOne({ _id: memeId })
                .then((removedMeme) => { res.send(removedMeme); })
                .catch((err) => { res.send(err); });
        },
    },
};