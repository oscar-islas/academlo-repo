const fs = require ('fs');

const saludo = "Hello World";

const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Ejemplo servidor con Node</title></head>');
        res.write(`<body><h1>Hello World</h1>
        <form action="/chat" method="POST"><input type="text" name="nombre" /><button type="submit">Enviar</button></form></body></html>`);
        return res.end();
    }
    
    if(url === '/chat'){
        const body = [];
        req.on('data', fragmento => {            
            body.push(fragmento);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const nombreUsuario = parseBody.split('=')[1];
            fs.writeFile('usuarios.txt', nombreUsuario, (error) => {
                if(error){
                    console.log(error);
                }else{
                    res.statusCode = 301;
                    res.setHeader('Location', '/');
                    return res.end();
                }
            });            
        })
    }
}

module.exports = { 
    request: requestHandler,
    saludo
};