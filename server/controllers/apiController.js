const User = require('../models/user');
const Coordinate = require('../models/coordinate');
const { body } = require('express-validator')
const { cloudinary } = require('../services/cloudinary');

const CLOUDINARY_PRESET = 'Waldo';

exports.get_coordinates = (req, res) => {
    Coordinate.findOne({ character: req.params.character }, (err, character) => {
        if (err) return res.json('Error');
        return res.json(character)
    })
}

exports.set_score = [
    body('username').trim().escape(),

    async (req, res) => {
        const { image, username, time, game } = req.body;
        if (!image.length) {
            const user = await new User({
                username,
                time,
                game,
            }).save();

            return res.json(true)
        }
        try {
            const data = await cloudinary.uploader.upload(image, {
                upload_preset: CLOUDINARY_PRESET
            })
            const user = await new User({
                username,
                time,
                game,
                image: data.url
            }).save();
            res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json({ err: 'Something went wrong' })
        }
    }
]

exports.get_scores = (req, res) => {

    const game = req.params.game

    User.find({ game: { $eq: game } }).sort({ time: 1 }).exec((err, users) => {
        if (err) return res.json(false);
        return res.json(users)
    })
}