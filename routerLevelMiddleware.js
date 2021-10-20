const express = require('express');

const app = express();

const adminRouter = express.Router(); // sub-app by using Router()
// --middleware
const logger = (req, res, next) => {
  console.log(
    ` ${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
      req.originalUrl
    } - ${req.protocol} - ${req.ip}`
  );
  next();
};
adminRouter.use(logger); // router level middleware

adminRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
  res.send('This is about');
});

app.listen(3000, () => {
  console.log('Linstening on port 3000');
});
