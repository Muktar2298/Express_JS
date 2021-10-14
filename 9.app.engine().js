const express = require('express');
const app = express();

// ser ejs
app.set('view engine', 'ejs');

app
  .route('/about')
  .get((req, res) => {
    res.render('pages/about');
  })
  .post((req, res) => {
    res.send('Welcome to home page with Post Request');
  })
  .put((req, res) => {
    res.send('Welcome to home page with Put Request');
  });

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
