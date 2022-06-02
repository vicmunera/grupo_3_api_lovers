const express = require ("express");
const cartController = require ("../controllers/cartControllers"); 
const router = express.Router();
router.get("/", cartController.index);
module.exports = router; 



