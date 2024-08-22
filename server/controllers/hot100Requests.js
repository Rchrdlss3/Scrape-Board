const Hot100Schema = require('../models/Hot100ChartModel');

module.exports = {
    get: async (req,res) => {
        const queryDate = req.query.date
        const top = req.query.top
        console.log(top)
        try {
            const findChart = await Hot100Schema.collection.findOne({
                date: queryDate
            }).then(res => {
                return res
            })
            top ? res.status(200).send(findChart.songs.slice(0,top)) : res.status(200).send(findChart)
            
        } catch (e) {
            res.status(500).send(e)
        }
    }
}