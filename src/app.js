const express = require ("express");
const path = require ("path");
const productRouter = require ("./routes/productRouter");
const mainRouter = require ("./routes/mainRouter");
const cartRouter = require ("./routes/cartRouter");
const loginRouter = require ("./routes/loginRouter");
const registerRouter = require ("./routes/registerRouter");
const methodOverride = require('method-override');

const app = express();

app.use ( methodOverride ('_method') );

app.set('view engine', 'ejs'); 
app.set('views', path.resolve(__dirname, '../src/Views'));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use("/",mainRouter); 
app.use("/productDetail",productRouter);
app.use("/login", loginRouter)
app.use("/productCart", cartRouter)
app.use("/register", registerRouter)

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});

;

//app.get('./src/Views/login', (req,res) => {
  //  res.sendFile(__dirname + './src/Views/login');
    //});

// app.get('/register', (req,res) =>{
  //  res.sendFile(path.resolve(__dirname, './Views/register'))
    // });

// app.get('/productCart', (req,res)=>{
   //  res.sendFile(__dirname + './Views/productCart');
    // });



app.use((req, res, next ) => { 
    res.status (404).render("not found")})