const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
  title: String,
  count: {
    type: Number,
    default: 0
  },
}, {timestamps:true});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;