const adminModel = require('../model/admin.model.js');
const { validationResult } = require('express-validator');

exports.adminSignup =(req,res)=>{
 const error = validationResult(req);
 if(!error.isEmpty()){
     return res.status(403).json({error : error.array()})
 }

 adminModel.create({
     email : req.body.email,
     password : req.body.password,
 })
 .then((result)=>{
   return res.status(201).json(result);
 })
 .catch((err)=>{
   return res.status(500).json({message : "Invalid Data"});
 });

}

exports.adminSignin=(req,res)=>{
  const error = validationResult(req);
  if(!error.isEmpty()){
    return res.status(403).json({error : error.array()});
  }

  adminModel.findOne({
    email : req.body.email,
    password : req.body.password
  })
  .then((result)=>{
    console.log(result);
    if(result)
      return res.status(200).json({
        message : "Data Found",
        result: result
       });
    else
      return res.status(404).json({message :"Data Not Found"}); 
  })
  .catch((err)=>{
    return res.status(500).json({message : "Error"});
  });
}