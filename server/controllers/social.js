const Meme = require('../models/Meme');

module.exports = {
    get: {
        all: (req, res) => {
            Meme.find()
                .sort({ date: -1 })
                .then(allMemes => res.send(allMemes))
        },
        view: (req, res) => {
            console.log(req.params)
            console.log(req.user)
            res.send({ message: 'im here' })
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
        // const id = req.params.id;
        // const { description } = req.body;
        // models.Origami.updateOne({ _id: id }, { description })
        //   .then((updatedOrigami) => res.send(updatedOrigami))
        //   .catch(next)
    },
    delete: (req, res) => {
        // const id = req.params.id;
        // models.Origami.deleteOne({ _id: id })
        //   .then((removedOrigami) => res.send(removedOrigami))
        //   .catch(next)
    },
};