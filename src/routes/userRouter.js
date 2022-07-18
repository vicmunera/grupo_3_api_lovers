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


//validaciones del register
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('surname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Tienes que escribir un email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('date').notEmpty().withMessage('Tienes que escribir tu fecha de cumpleaños'),

]


router.get("/productCart", cartController.cart);
router.get("/register", usersControllers.index);
router.post('/register', validations, usersControllers.processRegister);
router.post("/register", upload.single('image'), validations, usersControllers.create);






module.exports = router; 