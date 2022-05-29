const express = require ("express");
const productController = require ("../controllers/productsController"); 
const router = express.Router();
router.get("/",productController.detail);
module.exports =router; 


