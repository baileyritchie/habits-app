const HabitGroup = require("../../model/HabitGroup");

async function postHabitGroupData(data) {
  // creates a new habit group based on the title
  // TODO - add the S3 service that generates a new url to be used by the frontend
  let newHabitGroup = new HabitGroup(data);
  await newHabitGroup.save((err) => {
    if (err) {
      console.log('Attempting to create a habit group, instead got:',err.toString());
      return {message: err.toString(),created:false};
    }
  })
  return {message:'success',created:'true'}; // post group created succesfully
}

module.exports = postHabitGroupData;