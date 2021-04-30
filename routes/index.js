/*
includes:
1- all routes (wrapped in express async handler)
*/

const express = require('express');
const asyncHandler = require('express-async-handler');
const { getHabitGroups, postHabitGroups } = require('../controllers/habitGroupController');
const { getHabits,postHabit, getHabit, deleteHabit, editHabit } = require('../controllers/habitsController');

const {setLogin,setRegister, setLogout, getLoggedIn} = require('../controllers/userController');
const isAuth = require('../middlewares/auth');
const router = express.Router();

router.get('/habitgroups/:habitGroupId/',isAuth,asyncHandler(getHabits)); // gets all habits belonging to a habitgroup
router.post('/habitgroups/:habitGroupId/create',isAuth,asyncHandler(postHabit));// create a new habit belonging to a habit group
router.get('/habits/:habitId',isAuth, asyncHandler(getHabit)); //find a single habit by its habit id
router.get('/habits/:habitId/delete',isAuth,asyncHandler(deleteHabit)); // delete a habit
router.post('/habits/:habitId/edit',isAuth,asyncHandler(editHabit)); // edit a habit 
router.get('/habitgroups',isAuth,asyncHandler(getHabitGroups)); // get all habit groups
router.post('/habitgroups/create',isAuth,asyncHandler(postHabitGroups)); // create a new habit group
router.post('/users/login',asyncHandler(setLogin)); //login
router.post('/users/register',asyncHandler(setRegister)); // register
router.get('/users/logout', asyncHandler(setLogout)); //logout 
router.get('/users/loggedIn',asyncHandler(getLoggedIn)); // check if logged in



module.exports = router;
