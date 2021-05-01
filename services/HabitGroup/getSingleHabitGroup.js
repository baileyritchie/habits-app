const HabitGroup = require('../../model/HabitGroup');

async function getSingleHabitGroup(id) {
  console.log('get Single Habit Group Services...');
  const newHabitGroup = await HabitGroup.findById(id, function(err) {
    if (err) {
      return {found:false,message:err.toString,data:null};
    }
  });
  return {found:true, message: 'Found HabitGroup', data: newHabitGroup };
}

module.exports = getSingleHabitGroup;