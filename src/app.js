const express = require ("express");
const path = require ("path");
const productRouter = require ("./routes/productRouter");
const mainRouter = require ("./routes/mainRouter");

const app = express();


app.set('view engine', 'ejs'); 
app.set('views', path.resolve(__dirname, './Views'));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use("/",mainRouter); 
app.use("/product",productRouter)
app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});


app.get('/login', (req,res) =>{
    res.sendFile(__dirname + '/Views/login.html');
    });

app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './Views/register.html'))
    });



app.get('/productCart', (req,res)=>{
     res.sendFile(__dirname + '/Views/productCart.html');
    });
