// Create web server
// 1. create a web server
// 2. create a route
// 3. create a route handler
// 4. handle the request

// 1. create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 2. create a route
  if (req.url === '/comments') {
    // 3. create a route handler
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

// 4. handle the request
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});