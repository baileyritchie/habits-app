const HabitGroup = require("../../model/HabitGroup");

async function getHabitGroupData(userId) {
  // gets a habit group based on the user that created that habit group
  let habitList = await HabitGroup.find({userId});
  console.log('Habits from habitGroupList', habitList);
  return habitList;
}

module.exports = getHabitGroupData;