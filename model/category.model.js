const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
  catname :{
      type : String,
      require : true,
      unique : true,
      trim : true
  },
 
  catimg :{
      type : String,
      require : true,
      trim : true
  }
});

module.exports = mongoose.model("categories",catSchema);