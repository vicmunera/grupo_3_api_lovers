const express = require ("express");
const productCreateController = require ("../controllers/productCreateController"); 
const router = express.Router();
router.get("/", productCreateController.index); 
module.exports = router;





