const createError = require('http-errors');
const getHabitData = require('../services/getHabitData');

async function getHabits(req,res) {
  /* pass in some user Id to getHabitData() */
  let habits = await getHabitData(req.user);
  if (!habits) {
    throw createError(404,'Habits could not be retrieved');
  }
  res.status(200).send(habits);
}

module.exports = {
  getHabits
}