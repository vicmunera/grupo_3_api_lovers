const express = require ("express");
const path = require('path');
const multer = require('multer');
const router = express.Router();

const cartController = require ("../controllers/cartControllers"); 
const usersControllers = require("../controllers/usersControllers");
const userControllersLM = require('../controllers/userControllersLM')

// donde voy a guardar imagenes de los productos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/usersImg'))
    },
    filename: function (req, file, cb) {
        cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage })


router.get("/productCart", cartController.cart);
router.get("/register", usersControllers.index);
router.post("/register", upload.single('image'), usersControllers.create);
router.get("/register", userControllersLM.processRegister);
router.get("/register", userControllersLM.loginProcess);





module.exports = router; 