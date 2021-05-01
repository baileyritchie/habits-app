const HabitGroup = require('../../model/HabitGroup');

async function edithabitGroupData(newHabitGroup) {
  // todo - implement a function that finds the current habitgroup (by id)
  // and replaces it with the newHabitgroupData (like title and later image)
  const {_id,groupTitle} = newHabitGroup;
  let updatedHabitGroup = await HabitGroup.findByIdAndUpdate(_id,{
    groupTitle
  }, function (err) {
    if (err) {
      return {updated:false,message: err.toString()};
    }
  });
  return {updated:true,message:'Update Succesful', data:updatedHabitGroup};
}

module.exports = edithabitGroupData;