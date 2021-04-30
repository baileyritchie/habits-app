const mongoose = require('mongoose');
const habitSchema = mongoose.Schema({
  title: String,
  count: {
    type: Number,
    default: 0
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  habitGroupId: {
    type:mongoose.Schema.Types.ObjectId, ref: "HabitGroup",
    required:true
  }
}, {timestamps:true});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;