const Habit = require("../model/Habit");

async function getHabitData(userId) {
  /* add some fake data for testing */
  let habits = await Habit.find({"user":{_id: userId}});
  return habits;
}

module.exports = getHabitData;