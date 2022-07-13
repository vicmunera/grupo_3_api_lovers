const express = require ("express");
const router = express.Router();


const mainController = require ("../controllers/mainController"); 
const registerController = require ("../controllers/registerControllers"); 
const loginController = require ("../controllers/loginControllers"); 


router.get("/", mainController.index);
router.get("/login", loginController.index);
router.get("/register", registerController.index);


module.exports = router;