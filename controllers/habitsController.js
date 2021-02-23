const createError = require('http-errors');
const getHabitData = require('../services/getHabitData');

async function getHabits(req,res) {
  let habits = await getHabitData();
  if (!habits) {
    throw createError(404,'Habits could not be retrieved');
  }
  res.status(200).send(habits);
}

module.exports = {
  getHabits
}