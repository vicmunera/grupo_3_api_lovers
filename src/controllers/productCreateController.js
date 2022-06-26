const path = require('path');
const fs = require('fs');

const controller = {
    index: (req, res) => {
        let ultProduct = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../Data/productDataBase.json")));
        res.render("productCreateForm")
    },

    create: (req, res) => {

        let ultProduct = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../Data/productDataBase.json")));
        const ultimoProduct = productDataBase.pop();
        productDataBase.push(ultimoProduct);
        const newProduct = {

            id: ultProduct.id + 1,
            price : req.body.price,
            image: req.body.filename ,
            autor: req.body.autor,
            collection: req.body.collection,
            category: req.body.category,
            description: req.body.description

        }
        productDataBase.push(newProduct);
        const guardarProduct = JSON.stringify(productDataBase,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../Data/productDataBase.json'),
        guardarProduct)

        res.redirect('/home');

            


    }


}


module.exports = controller;