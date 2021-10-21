const express = require('express');

const routerRouteMethod = express.Router();

routerRouteMethod
  .route('/user')
  .all((req, res, next) => {
    console.log('Learning about router.route methods');
    next();
  })
  .get((req, res) => {
    res.send('GET');
  })
  .put((req, res) => {
    res.send('PUT');
  })
  .delete((req, res) => {
    res.send('DELETE');
  })

module.exports = routerRouteMethod;
