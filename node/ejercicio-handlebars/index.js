const express = require('express');
const fs = require('fs');
const expressHBS = require('express-handlebars');
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    const obj = {
        user: "Eduardo",
        email: "eduardo02@gmail.com"
    }
    fs.writeFile("./text.txt", JSON.stringify(obj), (err) => {
        console.log(err);
    })
    fs.readFile("./text.txt", (err, data) => {
        console.log(JSON.parse(data));
    });
    res.sendFile(path.join(__dirname, "views", "index.html"));    
})

app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));