const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {    
    routes.request(req, res);
});

server.listen(3001);