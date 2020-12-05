const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'You should write something for title'],
        },
        imageUrl: {
            type: String,
            required: [true, 'You should write something for imageUrl'],
        },
        imageWidth: {
            type: Number,
            required: [true, 'Problems with imageUrl and imageWidth'],
        },
        imageHeight: {
            type: Number,
            required: [true, 'Problems with imageUrl and imageHeight'],
        },
        imageRatio: {
            type: String,
            required: [true, 'Problems with imageUrl and imageRatio'],
        },
        imageOrientation: {
            type: String,
            required: [true, 'Problems with imageUrl and imageOrientation'],
        },
        imageAltName: {
            type: String,
            required: [true, 'Problems with imageUrl and imageAltName'],
        },
        addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
);

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
