import express from 'express';
import expressHBS from 'express-handlebars';
import shopRoutes from './routes/shopRoutes';
const app = express();

app.engine('handlebars', expressHBS());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true })); //
app.use(express.static('public'));

//Midleware => shop
app.use(shopRoutes);

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));

//1- npm install typescript --save-dev
//2- tsc --init
//3- npm install @types/express --save

