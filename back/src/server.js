const http = require('http');
const characters = require('./utils/data');

const server = http.createServer((req, res) => {
  
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes(`rickandmorty/character`)){
        const id = req.url.match(/\/(\d+)$/)[1];
        const character = characters.find(c => c.id === Number(id));
        if (character) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(character));
            return;
            
          }
          
          res.statusCode = 404;
          res.end('404 Not Found');
          
    } 
});

server.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});

