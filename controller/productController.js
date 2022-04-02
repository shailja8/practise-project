const Product = require('../model/product.model');
const { validationResult } = require('express-validator');

exports.addProduct = (req,res)=>{
  const error = validationResult(req);
  if(!error.isEmpty())
  {
      return res.status(403).json({error : error.array()});
  }    
    var pimgfront = "";
    var pimgback = "";
    var pimgright = "";
    var pimgleft = "";
    if (req.files.length > 0) 
    {
      pimgfront = "http://localhost:3000/images/"+req.files[0].filename;
        if (req.files.length > 1) 
        {
          pimgback = "http://localhost:3000/images/"+req.files[1].filename;
           if (req.files.length > 2) 
           {
            pimgright = "http://localhost:3000/images/"+req.files[2].filename;
             if (req.files.length > 3) 
             {
               pimgleft  = "http://localhost:3000/images/"+req.files[3].filename;
             }
          }
        }
    }

    Product.create({
    pname : req.body.pname,
    pprice : req.body.pprice,
    pqty: req.body.pqty,
    pimgfront : pimgfront,
    pimgback : pimgback,
    pimgright : pimgright,
    pimgleft : pimgleft,
    pdescription: req.body.pdescription,
    pdiscount : req.body.pdiscount,
    ptype :req.body.type,
    catid : req.body.catid
  })
  .then((result)=>{
    return res.status(201).json(result);
  })
  .catch((err)=>{
    console.log(err);
    return res.status(400).json({ message : "Oops! Something went wrong"});
  })
}

exports.viewProduct =(req,res)=>{
  Product.find()
  .then((result)=>{
    return res.status(200).json(result); 
  })
  .catch((err)=>{
    return res.status(404).json({ message : "Oops! Something went wrong"});
  })
}

exports.deleteProduct =(req,res)=>{
   Product.deleteOne({
       _id : req.params.id
    })
   .then((result)=>{
    if(result.deletedCount)
     {       
       console.log(result);         
       return res.status(202).json({message: 'Succesfully Deleted'});
     }
    else
       return res.status(204).json({message: 'Deletion Unsuccessful'});  
    })
   .catch((err)=>{
      console.log(err);
      return res.status(500).json({ message : "Oops! Something went wrong"});
    })
}

exports.updateProduct =(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty())
    {
        return res.status().json({error : error.array()});
    } 
    
    var pimgfront = "";
    var pimgback = "";
    var pimgright = "";
    var pimgleft = "";
    if (req.files.length > 0) 
    {
      pimgfront = "http://localhost:3000/images/"+req.files[0].filename;
        if (req.files.length > 1) 
        {
          pimgback = "http://localhost:3000/images/"+req.files[1].filename;
           if (req.files.length > 2) 
           {
            pimgright = "http://localhost:3000/images/"+req.files[2].filename;
             if (req.files.length > 3) 
             {
               pimgleft  = "http://localhost:3000/images/"+req.files[3].filename;
             }
          }
        }
    }

   Product.updateOne({
       _id : req.body.pid
   },{
       $set :{
        pname : req.body.pname,
        pprice : req.body.pprice,
        pqty: req.body.pqty,
        pimgfront : pimgfront,
        pimgback : pimgback,
        pimgright : pimgright,
        pimgleft : pimgleft,
        pdescription: req.body.pdescription,
        pdiscount : req.body.pdiscount,
        ptype :req.body.type,
        catid : req.body.catid
       }
   })
   
   .then(result=>{
            console.log(result);
             if(result.modifiedCount)
             {
              console.log(result.modifiedCount);   
              return res.status(200).json({message: 'Updated Successfully'});
            }
             else
              return res.status(404).json({message: 'Updation Unsuccessfull'});
        })
        .catch(err=>{
          console.log(err);  
          return res.status(500).json({message: 'Oops! Something went wrong'});
        });
}