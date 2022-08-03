const express = require("express");
const path = require('path');
const multer = require('multer');
const router = express.Router();
const { body } = require('express-validator');

const cartController = require("../controllers/cartControllers");
const usersControllers = require("../controllers/usersControllers");
const userControllersLM = require('../controllers/userControllersLM')


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







module.exports = router; 