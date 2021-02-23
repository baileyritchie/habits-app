const Habit = require("../model/Habit");

async function getHabitData() {
  /* add some fake data for testing */
  await Habit.create({title:"hey testing",count:22});
  let habits = await Habit.find({});
  return habits;
}

module.exports = getHabitData;