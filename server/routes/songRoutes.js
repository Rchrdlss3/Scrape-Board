const express = require('express');
const router = express.Router();
const songController = require('../controllers/songRequests');

router.get('/get',songController.get)

module.exports = router