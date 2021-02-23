/*
includes:
1- all routes (wrapped in express async handler)
*/

const express = require('express');
const asyncHandler = require('express-async-handler');
const { getHabits } = require('../controllers/habitsController');
const sampleController = require('../controllers/sampleController');

const router = express.Router();

router.get('/sample',asyncHandler(sampleController));
router.get('/habits',asyncHandler(getHabits));
router.post('/users/login',asyncHandler()); //login
router.post('/users/register',asyncHandler()); // register
router.get('/users/auth',asyncHandler()); //check auth status


module.exports = router;
