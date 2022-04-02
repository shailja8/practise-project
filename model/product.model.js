const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PSchema = new mongoose.Schema({
    pname :{
        type : String,
        require :true,
        trim : true
    },

    pprice :{
        type : Number,
        require : true,
        trim :true
    },

    pqty:{
       type : Number,
       require : true,
       min : 1
    },

    pimgfront :{
       type : String,
       require :true,
       trim : true
    },
    pimgback :{
        type : String,
        require :true,
        trim : true
     },
     pimgright :{
        type : String,
        require :true,
        trim : true
     },
     pimgleft :{
        type : String,
        require :true,
        trim : true
     },
    pdescription:{
       type : String,
       require : true
    },
    pdiscount :{
       type :Number,
       require : true
    },
    ptype :{
       type : String,
    },
    catid :{
       type : Schema.Types.ObjectId
    }
})
module.exports = mongoose.model("products",PSchema);