const Habit = require("../model/Habit");
async function getHabitData(userId) {
  let habits = await Habit.find({userId});
  return habits;
}

module.exports = getHabitData;