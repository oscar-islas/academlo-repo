const express = require('express');
const fs = require('fs');
const expressHBS = require('express-handlebars');
const path = require("path");
const shopRoutes = require('./routes/shopRoutes');
const app = express();

app.engine('handlebars', expressHBS());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true })); //
app.use(express.static('public'));

//Midleware => shop
app.use(shopRoutes);

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
