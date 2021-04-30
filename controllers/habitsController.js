const createError = require('http-errors');
const deleteHabitData = require('../services/Habit/deleteHabitData');
const editHabitData = require('../services/Habit/editHabitData');
const getHabitData = require('../services/Habit/getHabitData');
const getSingleHabit = require('../services/Habit/getSingleHabit');
const postHabitData = require('../services/Habit/postHabitData');

async function getHabits(req,res) {
  /* gets all habits created by a user and under a habit group */
  let habitGroupId = req.params.habitGroupId;
  let habits = await getHabitData(req.user,habitGroupId);
  if (!habits) {
    throw createError(404,'Habits could not be retrieved');
  }
  res.send(habits);
}
async function postHabit(req,res) {
  /* creates a new habit based on the user and the current habitgroup  */
  let habitGroupId = req.params.habitGroupId;
  let habit = Object.assign(req.body,req.user,habitGroupId); // TODO - implement postHabitData with userId and habitgroup
  let {message,created} = await postHabitData(habit);
  if (!created) {
    throw createError(404,message);
  }
  res.sendStatus(200).send(message);
}
async function getHabit(req,res) {
  console.log('attempting to get single habit in controller');
  let id = req.params.habitId;
  let habit = await getSingleHabit(id);
  if (!habit) {
    throw createError(404, 'Habit not found');
  }
  res.send(habit);
}
async function deleteHabit(req,res) {
  console.log('Delete Habit Controller Triggered',req.params);
  let id = req.params.habitId;
  console.log('id from controller',id);
  let {deleted,message} = await deleteHabitData(id);
  if (!deleted) {
    throw createError(401,message);
  }
  res.sendStatus(200).send(deleted);
}
async function editHabit(req,res) {
  console.log('Edit Habit controller targeted');
  let id = req.params.habitId;
  let habitWithId = Object.assign(req.body,{_id:id});
  let newHabit = await editHabitData(Object.assign(habitWithId,req.user));
  if (!newHabit) {
    throw createError(401,'Habit Could Not be Edited');
  } 
  res.sendStatus(200).send({message:'Edit succesful'});
}
module.exports = {
  getHabits,
  postHabit,
  getHabit,
  deleteHabit,
  editHabit
}