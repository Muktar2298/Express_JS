const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const routerParamMethod = require('./router.param.js');
const routerRouteMethod = require('./router.route.js');

const app = express();

app.use('/', publicRouter);
app.use('/admin', adminRouter);
app.use('/param', routerParamMethod);
app.use('/route', routerRouteMethod);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
