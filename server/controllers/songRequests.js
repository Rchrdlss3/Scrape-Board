const Hot100Schema = require('../models/Hot100ChartModel');

module.exports = {
    get: async (req,res) => {
        const queryDate = req.query.date
        const songName = req.query.songName
        try {
            const findSong = await Hot100Schema.collection.findOne({
            date: queryDate
        }).then(result => {
        if (result == null) {
            res.status(404).send(`Song ${songName} not found`)
        } else {
            const songArray = result.songs.filter((song) => song.song.toLowerCase().includes(songName.toLowerCase()))
            res.status(200).send(songArray)
        }
    })
} catch (e) {
    res.status(500).send(e)
}
}
}
