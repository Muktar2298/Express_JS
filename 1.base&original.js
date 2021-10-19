const express = require('express');
const app = express();
const admin = express();

admin.get('/user/:id', (req, res) => {
  console.log(req.baseUrl); // 1.baseUrl
  console.log(req.originalUrl); // 2.originalUrl
  res.send('Hello Programmer');
});

app.use('/admin', admin);

// create server with port
app.listen(3000, () => {
  console.log('listening on port 3000');
});
