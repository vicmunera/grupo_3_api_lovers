const express = require ("express");
const productController = require ("../controllers/productsController"); 
const router = express.Router();
router.get("/product",productController.detail);
module.exports =router; 


