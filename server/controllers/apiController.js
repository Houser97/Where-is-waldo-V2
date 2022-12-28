const User = require('../models/user');
const Coordinate = require('../models/coordinate');
const [body, validationResult] = require('express-validator')

exports.get_coordinates = (req, res) => {
    Coordinate.findOne({character: req.params.character}, (err, character) => {
        if(err) return res.json('Error');
        return res.json(character)
    })
}

exports.get_scores = (req, res) => {
    User.find((err, users) => {
        if(err) return res.json('Error');
        return res.json(users)
    })
}

exports.set_score = [
    body('username').trim().escape(),

    (req, res) => {
        const user = new User({
            username: req.body.username,
            time: req.body.time,
        }).save((err, user) => {
            User.find((err, users) => {
                if(err) return res.json('Error');
                return res.json(users)
            })
        })
    }
]