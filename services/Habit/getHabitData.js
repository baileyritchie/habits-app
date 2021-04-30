// gets all the habits from a user and the habitgroup the user wants to create the habit within

const Habit = require("../../model/Habit");
async function getHabitData(userId,habitGroupId) {
  let habits = await Habit.find({userId,habitGroupId}); // do we need exec() here?

  return habits;
}

module.exports = getHabitData;