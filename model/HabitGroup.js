const mongoose = require('mongoose');

const habitGroupSchema = mongoose.Schema({
  groupTitle:{type:String, required:true},
  habits:[{type: mongoose.Schema.Types.ObjectId, ref: "Habit"}],
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  }
},{timestamps:true});

const HabitGroup = mongoose.model('HabitGroup',habitGroupSchema);

module.exports = HabitGroup;