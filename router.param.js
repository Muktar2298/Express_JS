const express = require('express');

const routerParamMethod = express.Router();

// match the url(route perameter) & execute a callback function
routerParamMethod.param('user', (req, res, next, id) => {
  req.user = id === '1' ? 'Admin' : 'Anonymous';
  next();
});

// set dynamic route
routerParamMethod.get('/:user', (req, res) => {
  res.send(`Hello ${req.user}`);
});

routerParamMethod.get('/about', (req, res) => {
  res.send('About');
});

module.exports = routerParamMethod;
