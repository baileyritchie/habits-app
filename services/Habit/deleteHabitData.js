const Habit = require("../../model/Habit");

async function deleteHabitData(id){
  console.log('Id from service',id);
  await Habit.findByIdAndDelete(id,function (err) {
    if (err) {
      // something went wrong
      return {deleted:false, message:err.toString()};
    }
  });
  // TODO - delete that habit from where it exists in the habits array of a habitGroup
  return {deleted:true};
}

module.exports = deleteHabitData;