const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //   res.send('HOME');
  res.send(a);
  throw new Error('There was a problem');
});

// 404 error handler
app.use((req, res, next) => {
  next('Not found URL');
});

/* // 1.(way) error-handeling middleware
const errorHandelingMiddleware = (err, req, res, next) => {
  console.log(err);
  res.send(500).send("There was an serverside error")
}; 
app.use(errorHandelingMiddleware); */

// 2.(way) error-handeling middleware
const errorHandelingMiddleware2 = (err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send('There was an server side error');
  }
};
app.use(errorHandelingMiddleware2);

// invisible default error-handeling middleware
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
