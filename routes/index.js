/*
includes:
1- all routes (wrapped in express async handler)
*/

const express = require('express');
const asyncHandler = require('express-async-handler');
const sampleController = require('../controllers/sampleController');

const router = express.Router();

router.get('/sample',asyncHandler(sampleController));

module.exports = router;
