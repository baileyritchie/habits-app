// edits the habit based on the habit id (currently)
const Habit = require("../../model/Habit");

async function editHabitData(habit) {
  const {title,count} = habit;
  let newHabit = await Habit.findByIdAndUpdate(habit._id,{
    title,
    count
  },{new:true},(err) => {
    if (err) {
      console.log('Error in Updating This Habit');
    } else {
      console.log('Updated Succesfully');
    }
  })
  return newHabit;
}

module.exports = editHabitData;