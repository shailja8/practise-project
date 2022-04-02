const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  name :{
      type : String,
      require :true,
  },
  email :{
      type : String,
      require : true,
      trim : true,
      unique : true
  },
  password :{
     type : String,
     require :true
  },
  mobile :{
      type : Number,
      require : true
  },
  
  cart :[
      {
        type : Schema.Types.ObjectId,
        ref : "products" 
      }]
});

module.exports = mongoose.model("users",UserSchema);