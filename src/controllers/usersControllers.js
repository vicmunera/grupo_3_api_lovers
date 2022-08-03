const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
         let userDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../Data/userDataBase.json')));
         res.render(path.resolve(__dirname, '../views/register'));
    },

    create: (req, res) => {
        let userDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../Data/userDataBase.json')));
        const ultimoUsuario = userDataBase.pop();
        userDataBase.push(ultimoUsuario);
        
        const newUser = {
            id: ultimoUsuario.id + 1,
            name : req.body.name,
            surname:req.body.surname,
            username:req.body.username,
            email: req.body.email ,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file.filename,
            date: req.body.date
         

        }

        userDataBase.push(newUser);
        const guardarUsuario = JSON.stringify(userDataBase,null, " ");
        fs.writeFileSync(path.resolve(__dirname,'../Data/userDataBase.json'),guardarUsuario);
        res.redirect('/');
    },
   

}

module.exports = controller;