const createError = require('http-errors');
const getHabitData = require('../services/getHabitData');
const postHabitData = require('../services/postHabitData');

async function getHabits(req,res) {
  /* pass in some user Id to getHabitData() */
  console.log('The User Id',req.user);
  let habits = await getHabitData(req.user);
  if (!habits) {
    throw createError(404,'Habits could not be retrieved');
  }
  res.status(200).send(habits);
}
async function postHabit(req,res) {
  /* pass in data reqd to create new habit (protected route) */
  let habit = Object.assign(req.body,req.user);
  let {message,created} = await postHabitData(habit);
  if (!created) {
    throw createError(404,message);
  }
  res.status(200).send(message);
}
module.exports = {
  getHabits,
  postHabit
}