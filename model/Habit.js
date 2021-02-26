const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
  title: String,
  count: {
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Types.ObjectId, ref: "User"
  }
}, {timestamps:true});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;