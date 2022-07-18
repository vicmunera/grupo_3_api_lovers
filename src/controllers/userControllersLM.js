const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs')

const {
	validationResult
} = require('express-validator');

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
    register: (req, res) => {
        return res.render('register')
    },

    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'El email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		

		let userCreated = User.create(userToCreate);},

    login: (req, res) => {

		return res.render('login');
	},

    loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (passwordOk) {
				
				req.session.userLogged = userToLogin;

				if(req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 80) * 2})
				}

				return res.redirect('/user/profile');
			} 
			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

    profile: (req, res) => {

		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

    logout: (req, res) => {
		res.clearCookie('email');
		req.session.destroy();
		return res.redirect('/');
	},

    destroy: (req, res) => {
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/userDataBase.json')));
        const userDeleteId = req.params.id;
        const usersFinal = users.filter(user => user.id != userDeleteId);
        let usersGuardar = JSON.stringify(usersFinal, null, 2)
        fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersGuardar);
        res.redirect('/user/administrar');
    }

}

module.exports = controller;



// ver despues const User = require('../models/User');


	