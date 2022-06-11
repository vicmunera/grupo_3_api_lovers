const express = require ("express");
const cartController = require ("../controllers/cartControllers"); 
const router = express.Router();
router.get("/cart", cartController.index);
module.exports = router; 
