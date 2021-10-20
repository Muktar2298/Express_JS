const express = require('express');

const app = express();

const adminRouter = express.Router(); // sub-app by using Router()

// --middleware
const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        ` ${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      );
    } else {
      throw new Error('Failed to Log');
    }
  };
};

adminRouter.use(loggerWrapper({ log: true })); // router level middleware

adminRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
  res.send('This is about');
});

// error handling middleware
const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  console.log(err.message);
  res.status(500).send('There was a server side error');
};

adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Linstening on port 3000');
});
