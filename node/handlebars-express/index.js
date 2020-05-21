const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHBS = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHBS({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-hbs',
    extname: 'handlebars'
}));

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('home', {pageTitle: "Bienvenido", mensaje: "Hola mundo con handlebars"});
});

app.get('/tienda', (req, res) => {

    let productos = [{nombre: "Tenis Nike", medida: "M", cambiaColor: true},{nombre: "Xbox one", medida: "no medida", cambiaColor: false}, {nombre: "Playera Adidas", medida: "S", cambiaColor: true}];
    // res.sendFile(path.join(__dirname,"views","shop.html"));
    res.render('shop', {pageTitle: "Tienda", productos: productos});
});

app.listen(3001, () => {
    console.log("Se ha iniciado el servidor en el puerto 3000");
});