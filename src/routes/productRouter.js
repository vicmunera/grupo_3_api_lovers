const express = require ("express");
const productController = require ("../controllers/productsController"); 
const productCreateController = require ("../controllers/productCreateController"); 
const router = express.Router();
router.get("/productDetail",productController.detail);
router.get("/productCreateForm",productCreateController.index);




module.exports =router; 


