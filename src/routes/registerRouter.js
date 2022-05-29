const express = require ("express");
const registerController = require ("../controllers/registerControllers"); 
const router = express.Router();
router.get("/", registerController.index);
module.exports = router; 