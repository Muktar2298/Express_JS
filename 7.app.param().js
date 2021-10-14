const express = require('express');
const { set } = require('lodash');

const app = express();

// app.param()
app.param('id', (req, res, next, id) => {
  // ki korbe id path ta mathch korle ta define kore dewa
  const user = {
    userId: id,
    userName: 'Nishat Hasan Muktar',
  };
  // --add user into req
  req.userDetails = user;

  // after complete the all process go to get request
  next();
});

//--main app Request method
app.get('/user/:id', (req, res) => {
  console.log(req.userDetails);
  res.send('Welcome to Home page!!');
});

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
