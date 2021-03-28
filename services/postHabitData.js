// this service adds a new habit, posted by a specific user
const Habit = require('../model/Habit');

async function postHabitData(data) {
  let newHabit = new Habit(data);
  await newHabit.save( function (err) {
    if (err) {
      return {message: err.toString(), created:false};
    }
  });
  return {message: 'success', created: true}

}

module.exports = postHabitData;