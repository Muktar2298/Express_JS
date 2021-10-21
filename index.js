const express = require('express');
const fs = require('fs');
const app = express();

/* // (1.way) for handeling asynchronous error
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exit', (err, data) => {
    if (err) {
      next(err);
    } else {
      console.log(data);
    }
  });
}); */

// (2.way) for handeling asynchronous error
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      //   throw new Error('There was an error');
      res.send(a);
    } catch (err) {
      next(err);
    }
  });
});

// custome error-handeling middleware
app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send('There was an serverside problem');
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
