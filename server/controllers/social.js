const Meme = require('../models/Meme');

module.exports = {
    get: {
        // view: (req, res) => {
        // }
    },
    post: {
        add: (req, res) => {
            const { title, imageUrl, _id } = req.body;
            Meme.create({ title, imageUrl, addedBy: _id })
                .then((createdMeme) => { res.send(createdMeme); })
                .catch((err) => { res.send(err); });
        }
    },
};