const express = require ("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const path = require ("path");

const app = express();

const publicPath = path.resolve(__dirname, './Public');
app.use(express.static(publicPath));

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");

});
app.get('/', (req,res) =>{
res.sendFile(path.resolve(__dirname, './Views/home.html'))
});