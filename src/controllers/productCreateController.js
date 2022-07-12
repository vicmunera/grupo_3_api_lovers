const path = require('path');
const fs = require('fs');


const controller = {
    index: (req, res) => {
        
         let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../Data/productDataBase.json')));
         res.render(path.resolve(__dirname, '../views/productCreateForm'));
    },

    create: (req, res) => {

        let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../Data/productDataBase.json")));
        const ultimoProduct = productDataBase.pop();
        productDataBase.push(ultimoProduct);
        
        const newProduct = {

            id: ultimoProduct.id + 1,
            name:req.body.name,
            price : req.body.price,
            image: req.file.filename ,
            autor: req.body.autor,
            collection: req.body.collection,
            category: req.body.category,
            description: req.body.description

        }
        productDataBase.push(newProduct);
        const guardarProduct = JSON.stringify(productDataBase,null, " ");
        fs.writeFileSync(path.resolve(__dirname,'../Data/productDataBase.json'),guardarProduct);

        res.redirect('/');

            


    },

    edit:(req,res)=>{
        let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../Data/productDataBase.json')));
        const productId = req.params.id;
        let productEdit = productDataBase.find(productDataBase => productDataBase.id == productId);
        res.render(path.resolve(__dirname,'../Views/edit'), {productEdit});


    },
    put:(req,res)=>{
        let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../Data/productDataBase.json')));
       req.body.id = req.params.id;
       req.body.image = req.file ? req.file.filename : req.body.oldImagen;
       let productPut = productDataBase.map(productDataBase =>{
        if (productDataBase.id == req.body.id){
            return productDataBase = req.body;
        }
        return productDataBase;
       })
       let productActualizar = JSON.stringify(productPut,null,2)
       fs.writeFileSync(path.resolve(__dirname, '../Data/productDataBase.json'), productActualizar)
       res.redirect('/admin')
       

    }


}


module.exports = controller;