const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type:String, required:true},
  email: {type:String,required:true,unique:true},
  passwordHash: {type:String, required:true},
  habits: [{type: mongoose.Types.ObjectId, ref: "Habit"}]
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;
