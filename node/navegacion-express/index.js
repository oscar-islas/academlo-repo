const express = require('express');
const bodyParser = require('body-parser');
const books = require('./routes/books');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    console.log("Se ha recibido una petición");
    next();
});

app.use(bodyParser.urlencoded({extended: false })); //Va actuar en peticiones del tipo application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.send("<h1>Hola mundo desde node</h1>");
}); //localhost:3000/

app.use(books);

app.use("/admin", books); // admin/libros y admin/agregar-libro

app.use((req, res) => {    
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// C:\Users\l_l_o\Documents\academlo-ecommerce -> windows
// Users/l_l_o/Documents/academlo-ecommerce -> linux

app.listen(3001);