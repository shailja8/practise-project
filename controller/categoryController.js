const Category = require('../model/category.model');
const { validationResult } = require('express-validator');

exports.addCategory =(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(403).json({error : error.array()})
    }
  console.log(req.file.filename);
  Category.create({
     catname : req.body.catname,
     catimg : "http://localhost:3000/images/"+req.file.filename 
  })
  .then((result)=>{
     return res.status(201).json(result);
  })
  .catch((err)=>{
     console.log(err);
     return res.status(400).json({ message : "Oops! Something went wrong"});
  }) 
}

exports.viewCategory =(req,res)=>{
    Category.find()
    .then((result)=>{
       return res.status(200).json(result); 
    })
    .catch((err)=>{
       return res.status(404).json({ message : "Oops! Something went wrong"});
    })
}

exports.deleteCategory =(req,res)=>{
    Category.deleteOne({
      _id : req.params.id  
    })
    .then((result)=>{
        if(result.deletedCount)
           return res.status(202).json({message: 'Succesfully Deleted'});
        else
           return res.status(204).json({message: 'Deletion Unsuccessful'});  
    })
    .catch((err)=>{
        return res.status(500).json({ message : "Oops! Something went wrong"});
    })
}

exports.updateCategory =(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
      return res.status(403).json({ error : error.array()});
    }
    
    Category.updateOne({_id: req.body.catid},
        {
            $set:{
                catname: req.body.catname,
                catimg: "http://localhost:3000/images/"+req.file.filename
            }
        })
        .then(result=>{
            console.log(result);
             if(result.modifiedCount)
             {
              console.log(result.modifiedCount);   
              return res.status(204).json({message: 'Updated Successfully'});
            }
             else
              return res.status(404).json({message: 'Updation Unsuccessfull'});
        })
        .catch(err=>{
          console.log(err);  
          return res.status(500).json({message: 'Oops! Something went wrong'});
        });
}