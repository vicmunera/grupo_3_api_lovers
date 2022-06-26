const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');




const productController = require("../controllers/productsController");
const productCreateController = require("../controllers/productCreateController");


// donde voy a guardar imagenes de los productos


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/productImg'))
    },
    filename: function (req, file, cb) {
        cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage })

router.get("/productDetail", productController.detail);
router.get("/productCreateForm", productCreateController.index);
router.post("/productCreateForm", upload.single('image'), productCreateController.create);


module.exports = router;


