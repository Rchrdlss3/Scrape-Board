const express = require('express');
const router = express.Router();
const hot100Controller = require('../controllers/hot100Requests')

router.get('/get',hot100Controller.get)
module.exports = router