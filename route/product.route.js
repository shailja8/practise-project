const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

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

const productController =require('../controller/productController');

router.post("/add",
fileupload.array('pImg'),
body('pname').not().isEmpty(),
body('pprice').not().isEmpty(),
body('pprice').isNumeric(),
body('pqty').not().isEmpty(),
body('pqty').isNumeric(),
body('pdiscount').not().isEmpty(),
body('ptype').not().isEmpty(),
body('catid').not().isEmpty(),
productController.addProduct
)

router.get("/view-product",productController.viewProduct);

router.delete("/delete/:id",productController.deleteProduct);

router.post("/update",
fileupload.array('pImg'),
body('pname').not().isEmpty(),
body('pprice').not().isEmpty(),
body('pprice').isNumeric(),
body('pqty').not().isEmpty(),
body('pqty').isNumeric(),
body('pdiscount').not().isEmpty(),
body('ptype').not().isEmpty(),
body('catid').not().isEmpty(),
body('pid').not().isEmpty(),
productController.updateProduct
)

module.exports = router;