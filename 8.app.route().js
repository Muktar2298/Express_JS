const express = require('express');
const app = express();

app
  .route('/')
  .get((req, res) => {
    res.send('Welcome to home page with Get Request');
  })
  .post((req, res) => {
    res.send('Welcome to home page with Post Request');
  })
  .put((req, res) => {
    res.send('Welcome to home page with Put Request');
  });

//--Request method
app.get('/', (req, res) => {
  res.send('Welcom to home page');
});

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
