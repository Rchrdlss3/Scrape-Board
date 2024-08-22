const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SongEntrySchema = Schema({
    date: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    currentPosition: {
        type: Number,
        required: false
    },
    lastWeek: {
        type: String || Number,
        required: false
    },
    peakPosition: {
        type: Number,
        required: false
    },
    weeksOnChart: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('SongEntrySchema',SongEntrySchema)