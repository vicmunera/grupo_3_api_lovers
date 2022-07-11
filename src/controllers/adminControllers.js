const path = require('path');
const fs = require('fs');

const controller = {
    index: (req, res) => {
        let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../Data/productDataBase.json')));
        res.render(path.resolve(__dirname, '../Views/admin'), {productDataBase});
    },
    }

module.exports = controller;