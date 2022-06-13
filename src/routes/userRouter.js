const express = require ("express");
const cartController = require ("../controllers/cartControllers"); 
const router = express.Router();
router.get("/productCart", cartController.cart);
module.exports = router; 
