const express = require ("express");
const cartController = require ("../controllers/cartControllers"); 
const usersControllers = require("../controllers/usersControllers");
const path = require('path');
const multer = require('multer');
const router = express.Router();
router.get("/productCart", cartController.cart);


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


router.get("/register", usersControllers.index);
router.post("/register", upload.single('image'), usersControllers.create);

module.exports = router; 