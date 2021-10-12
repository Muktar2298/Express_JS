const http = require('http');

// Create a server
http
  .createServer((req, res) => {
    if (req === '/') {
      res.write('This is home page');
      res.end();
    } else if (req === '/about') {
      res.write('This is about page');
      res.end();
    } else {
      res.write('Not found!');
      res.end();
    }
  })
  .listen(3000);
console.log('Listening from port 3000');
