const createError = require('http-errors');
const deletehabitGroupData = require('../services/HabitGroup/deleteHabitGroupData');
const getHabitGroupData = require('../services/HabitGroup/getHabitGroupData');
const postHabitGroupData = require('../services/HabitGroup/postHabitGroupData');
const getSingleHabitGroup = require('../services/HabitGroup/getSingleHabitGroup');
const edithabitGroupData = require('../services/HabitGroup/editHabitGroupData');

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
async function deleteHabitGroup(req,res) {
  console.log('delete habitgroup from controller...')
  let id = req.params.habitGroupId;
  const {deleted,message} = await deletehabitGroupData(id);
  if (!deleted) {
    throw createError(404,message);
  }
  res.send({message});
}
async function editHabitGroup(req,res) {
  let id = req.params.habitGroupId;
  let habitGroupWithId = Object.assign(req.body,{_id:id});
  let {updated,message} = await edithabitGroupData(habitGroupWithId);
  if (!updated) {
    throw createError( 404,message);
  }
  res.send({message});
}

async function getHabitGroup(req,res) {
  // route that gets the data from a single, specific habit group
  console.log('get Single Habit Group Controller');
  let id = req.params.habitGroupId;
  let {found,message,data} = await getSingleHabitGroup(id);
  if (!found) {
    throw createError(404,message);
  }
  res.send({message,data});
}
module.exports = {
  getHabitGroups,
  postHabitGroups,
  editHabitGroup,
  deleteHabitGroup,
  getHabitGroup
}