// gets data for a single habit based on the habit id
const Habit = require("../../model/Habit");

async function getSingleHabit(id) {
  let habit = await Habit.findById(id);
  return habit;
}

module.exports = getSingleHabit;