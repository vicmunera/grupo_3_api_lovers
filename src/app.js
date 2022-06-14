const express = require ("express");
const path = require ("path");
const productRouter = require ("./routes/productRouter");
const mainRouter = require ("./routes/mainRouter");
const userRouter = require ("./routes/userRouter");

const methodOverride = require('method-override');

const app = express();

app.use ( methodOverride ('_method') );

app.set('view engine', 'ejs'); 
app.set('views', path.resolve(__dirname, '../src/Views'));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use("/",mainRouter); 
app.use("/product",productRouter);
app.use("/user", userRouter);

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});







