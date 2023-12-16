const User = require('../models/user');
const Coordinate = require('../models/coordinate');
const { body } = require('express-validator');
const { cloudinary } = require('../services/cloudinary');

const CLOUDINARY_PRESET = 'Waldo';
const ERROR_MSG = 'Server error.';

exports.get_coordinates = async (req, res) => {
    try {
        const character = await Coordinate.findOne({ character: req.params.character });
        if (!character) {
            return res.status(404).json({ err: 'Coordinate not found' });
        }
        return res.status(200).json(character);
    } catch (err) {
        return res.status(500).json({ err: ERROR_MSG });
    }
};

exports.set_score = [
    body('username').trim().escape(),

    async (req, res) => {
        const { image, username, time, game } = req.body;
        try {
            if (image && image.length) {
                const data = await cloudinary.uploader.upload(image, {
                    upload_preset: CLOUDINARY_PRESET,
                });
                await new User({
                    username,
                    time,
                    game,
                    image: data.url,
                }).save();
            } else {
                await new User({
                    username,
                    time,
                    game,
                }).save();
            }
            return res.status(200).json('User saved');
        } catch (error) {
            return res.status(500).json({ err: error.message || ERROR_MSG });
        }
    },
];

exports.get_scores = async (req, res) => {
    try {
        const game = req.params.game;
        const users = await User.find({ game }).sort({ time: 1 }).exec();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ err: ERROR_MSG });
    }
};