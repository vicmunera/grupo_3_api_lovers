
// 		let userInDB = User.findByField('email', req.body.email);

// 		if (userInDB) {
// 			return res.render('register', {
// 				errors: {
// 					email: {
// 						msg: 'El email ya está registrado'
// 					}
// 				},
// 				oldData: req.body
// 			});
// 		}

		

// 		let userCreated = User.create(userToCreate);

//     login: (req, res) => {

// 		return res.render('login');
// 	},

//     loginProcess: (req, res) => {
// 		let userToLogin = User.findByField('email', req.body.email);
		
// 		if(userToLogin) {
// 			let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
// 			if (passwordOk) {
				
// 				req.session.userLogged = userToLogin;

// 				if(req.body.remember) {
// 					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 80) * 2})
// 				}

// 				return res.redirect('/user/profile');
// 			} 
// 			return res.render('login', {
// 				errors: {
// 					email: {
// 						msg: 'Las credenciales son inválidas'
// 					}
// 				}
// 			});
// 		}

// 		return res.render('login', {
// 			errors: {
// 				email: {
// 					msg: 'No se encuentra este email en nuestra base de datos'
// 				}
// 			}
// 		});
// 	},

//     profile: (req, res) => {

// 		return res.render('userProfile', {
// 			user: req.session.userLogged
// 		});
// 	},

//     logout: (req, res) => {
// 		res.clearCookie('email');
// 		req.session.destroy();
// 		return res.redirect('/');
// 	},

//     destroy: (req, res) => {
//         let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/userDataBase.json')));
//         const userDeleteId = req.params.id;
//         const usersFinal = users.filter(user => user.id != userDeleteId);
//         let usersGuardar = JSON.stringify(usersFinal, null, 2)
//         fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), usersGuardar);
//         res.redirect('/user/administrar');
//     }

// }

// module.exports = controller;



// // ver despues const User = require('../models/User');


	