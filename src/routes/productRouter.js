const express = require ("express");
const productController = require ("../controllers/productsController"); 
const productCreateController = require ("../controllers/productCreateController"); 
const router = express.Router();
router.get("/detail",productController.detail);
router.get("/createForm",productCreateController.index);


module.exports =router; 


