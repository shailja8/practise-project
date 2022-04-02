const express = require('express');
const router = express.Router();

const multer = require('multer');
var storage = multer.diskStorage({
  destination : 'public/images',
  filename : function(req,file,cb)
  {
      cb(null, Date.now()+'-'+file.originalname)
      console.log(file.originalname);
  }
});
var fileupload = multer({ storage : storage });

const categoryController = require('../controller/categoryController');
const { body } = require('express-validator');

router.post("/add-category",
fileupload.single('catimg'),
body('catname').not().isEmpty(),
categoryController.addCategory
)

router.get("/view-category",categoryController.viewCategory);

router.delete("/delete/:id",categoryController.deleteCategory);

router.post("/update",
fileupload.single('catimg'),
body('catname').not().isEmpty(),
body('catid').not().isEmpty(),
categoryController.updateCategory);

module.exports = router;