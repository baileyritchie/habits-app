// this service adds a new habit, posted by a specific user within a certain habit group
const Habit = require('../../model/Habit');
const HabitGroup = require('../../model/HabitGroup');

async function postHabitData(data) {
  let newHabit = new Habit(data);
  await newHabit.save( function (err) {
    if (err) {
      return {message: err.toString(), created:false};
    }
  });
  const updatedHabitGroup = await HabitGroup.findByIdAndUpdate(
    data.habitGroupId,
    {$push:{"habits": newHabit.id}},
    {upsert: true, new : true}
  );
  return {message: 'success', created: true}
}

module.exports = postHabitData;