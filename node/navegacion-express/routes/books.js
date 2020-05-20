const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/libros", (req, res) => {    
    res.sendFile(path.join(__dirname, "..", "views", "libros.html"));    
});

router.post("/agregar-libro", (req, res) => {
    console.log(req.body.libro);
    res.redirect('/');
});

module.exports = router;