const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hot100Schema = Schema({
    date: {
        type: String,
        required: true
    },
    songs : [{
        artist: String,
        song: String,
        currentPosition: String,
        lastWeek: String,
        peakPosition: String,
        weeksOnChart: String,
        imagePath: String
    }]
})

module.exports = mongoose.model('Hot100Schema',Hot100Schema)