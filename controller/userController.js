const UserModel = require("../model/user.model");
const {validationResult}= require('express-validator');

exports.addUser= (req,res)=>{
const error = validationResult(req);
  if(!error.isEmpty())
  {
    return res.status(403).json({error : error.array()});
  }    

  UserModel.create({
    name : req.body.name,  
    email : req.body.email,
    password : req.body.password,
    mobile : req.body.mobile
  })
  .then((result)=>{
    console.log(result);  
    return res.status(201).json(result);
  })
  .catch((err)=>{
    console.log(err);
    return res.status(400).json({ message : "Oops! Something went wrong"});
  })
}

exports.addToCart =(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty())
    {
      return res.status(403).json({error : error.array()});
    }    

    console.log(req.body.pid);

}