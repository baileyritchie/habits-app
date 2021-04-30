const createError = require('http-errors');
const getHabitGroupData = require('../services/HabitGroup/getHabitGroupData');
const postHabitGroupData = require('../services/HabitGroup/postHabitGroupData');

async function getHabitGroups(req,res) {
  let user = req.user;
  let habits = await getHabitGroupData(user);
  console.log('in habitgroup controller', );
  if (!habits) {
    throw createError(404,'Could not get Habit Group Data');
  }
  res.send(habits);
}

async function postHabitGroups(req,res) {
  let newHabit = Object.assign(req.body,req.user);
  let {message,created} = await postHabitGroupData(newHabit);
  if (!created) {
    throw createError(404,message);
  }
  res.send({message});
}


module.exports = {
  getHabitGroups,
  postHabitGroups
}