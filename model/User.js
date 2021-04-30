const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type:String, required:true},
  email: {type:String,required:true,unique:true},
  passwordHash: {type:String, required:true},
  habitGroups: [{type: mongoose.Schema.Types.ObjectId, ref: "HabitGroup"}]
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;
