const path = require('path');
const fs = require('fs');


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
            last_name : req.body.last_name,
            email: req.body.email ,
            password: req.body.password,
            image: req.file.image,
            currency: req.body.currency,
            country: req.body.country

        }

        userDataBase.push(newUser);
        const guardarUsuario = JSON.stringify(userDataBase,null, " ");
        fs.writeFileSync(path.resolve(__dirname,'../Data/userDataBase.json'),guardarUsuario);
        res.redirect('/');
    }

}

module.exports = controller;