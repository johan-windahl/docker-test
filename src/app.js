const http = require('http');

//const hostname = '0.0.0.0'; //IP adress exposed outside docker
const hostname = '127.0.0.1'; //IP adress exposed outside docker
const port = 3888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});