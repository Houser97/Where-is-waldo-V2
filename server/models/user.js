const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true},
    time: {type: Number, required: true},
    game: {type: String, required: true},
    image: {type: String, default: "https://res.cloudinary.com/dluwqcce9/image/upload/v1694961227/InTouch/qqaarw68ruwwluvcphkh.jpg"},
})

module.exports = mongoose.model('User', UserSchema);