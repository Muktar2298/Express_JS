/* 
1.router.all()
*/

const express = require('express');

const publicRouter = express.Router();

/* 1.router.all()
// --middleware
const log = (req, res, next) => {
  console.log('Logging Something');
  next();
};
publicRouter.all('*', log); */


publicRouter.get('/', (req, res) => {
  res.send('Home');
});

publicRouter.get('/about', (req, res) => {
  res.send('About');
});

module.exports = publicRouter;
