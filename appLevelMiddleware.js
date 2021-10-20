const express = require('express');
const app = express();


// --middleware
const logger = (req, res, next) => {
  console.log(
    ` ${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
      req.originalUrl
    } - ${req.protocol} - ${req.ip}`
  );
    next();
};
app.use(logger);  // app lever e use korteci looger middler  ta

app.get('/about', (req, res) => {
  res.send('This is about');
});

app.listen(3000, () => {
  console.log('Linstening on port 3000');
});
