const HabitGroup = require('../../model/HabitGroup');

async function deletehabitGroupData(id) {
  console.log('Delete habit group from service...')
  // todo - implement a function that finds the current habitgroup (by id)
  // and deletes it 
  await HabitGroup.findByIdAndDelete(id, function (err) {
    if (err) {
      return {deleted:false,message:err.toString()};
    }
  });
  return {deleted:true,message: 'Delete Succesful'};

}

module.exports = deletehabitGroupData;