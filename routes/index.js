/*
includes:
1- all routes (wrapped in express async handler)
*/

const express = require('express');
const asyncHandler = require('express-async-handler');
const { getHabits } = require('../controllers/habitsController');
const sampleController = require('../controllers/sampleController');
const {setLogin,setRegister, setLogout} = require('../controllers/userController');
const isAuth = require('../middlewares/auth');
const router = express.Router();

router.get('/sample',asyncHandler(sampleController));
router.get('/habits',isAuth,asyncHandler(getHabits));
router.post('/users/login',asyncHandler(setLogin)); //login
router.post('/users/register',asyncHandler(setRegister)); // register
router.get('/users/logout', asyncHandler(setLogout)); //logout 

module.exports = router;
