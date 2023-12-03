const User = require('../models/user');
const Coordinate = require('../models/coordinate');
const {body} = require('express-validator')

exports.get_coordinates = (req, res) => {
    Coordinate.findOne({character: req.params.character}, (err, character) => {
        if(err) return res.json('Error');
        return res.json(character)
    })
}

exports.set_score = [
    body('username').trim().escape(),

    (req, res) => {
        const user = new User({
            username: req.body.username,
            time: req.body.time,
        }).save((err, user) => {
            User.find().sort({time: 1}).exec((err, users) => {
                if(err) return res.json('Error');
                return res.json(users)
            })
        })
    }
]

exports.get_scores = (req, res) => {

    const game = req.params.game

    User.find({game: {$eq: game}}).sort({time: 1}).exec((err, users) => {
        if(err) return res.json(false);
        return res.json(users)
    })
}