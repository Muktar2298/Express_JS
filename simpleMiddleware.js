/* 
1.middleware function

*/

const express = require('express');
const app = express();

/* // 1.middleware function 
const myMiddleware = (req, res, next) => {
  console.log('This is middleware function');
  next();
};
app.use(myMiddleware); */



app.get('/about', (req, res) => {
  res.send('This is about');
});

app.listen(3000, () => {
  console.log('Linstening on port 3000');
});
