const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoordinateSchema = new Schema({
    character: {type: String, required:true},
    x: {type: Number, required:true},
    y: {type: Number, required:true},
})

module.exports = mongoose.model('Coordinate', CoordinateSchema);