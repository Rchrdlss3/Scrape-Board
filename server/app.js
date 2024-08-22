require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { corsOptions } = require('./helpers/constants');
const {getHot100Entries} = require('./helpers/functions');
const Hot100Schema = require('./models/Hot100ChartModel');
const hot100Route = require('./routes/hot100Routes');
const songRoute = require('./routes/songRoutes');
const songsSchema = require('./models/SongModel');
const app = express()
const date = new Date()
const currentDate = date.toISOString().slice(0,10);
async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        Hot100Schema.collection.findOne({
            date : currentDate
        }).then(async (result) => {
            if (result == null) {
                Hot100Schema.collection.insertOne({
                    date: currentDate,
                    songs: await getHot100Entries()
                })
            }
        })
        console.log('connected')
    } catch (e) {
        console.log(e)
    }
}

app.listen(80);
app.use(cors(corsOptions))
app.use(express.json())
app.use('/hot100Chart',hot100Route)
app.use('/songs',songRoute)
connect();