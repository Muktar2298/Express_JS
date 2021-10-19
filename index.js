/*  REQUEST OBJECT PROPERTIES 
1.req.url
2.req.path
3.req.hostname
4.req.ip
5.req.method
6.req.params
7.req.query
8.req.body
9.req.secure
10.req.protocol
11.req.cookies 
12.req.route

//---methods --//
1.req.accepts()
2.req.get()
*/

const express = require('express');
const app = express(); // main-app
const cookieParser = require('cookie-parser'); // cookie parser
const adminRoute = express.Router(); // sub-app

adminRoute.use(express.json());
app.use(cookieParser());

adminRoute.get('/user/:id', (req, res) => {
  //   console.log(req.url);
  //   console.log(req.path);
  //   console.log(req.hostname);
  //   console.log(req.ip);
  //   console.log(req.method);
  //   console.log(req.params);
  //   console.log(req.query);
  //   console.log(req.secure);
  //   console.log(req.protocol);
  //   console.log(req.body.name);
  //   console.log(req.cookies);
  //   console.log(req.route);
  // console.log(req.accepts('json'))
  //   console.log(req.get('Content-Type'));
  res.send('Hello Developer');
});
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
  console.log(req.url); // 1.req.url
  console.log(req.path); // 1.req.path
  res.send('Hello Programmer');
});

// create server with port
app.listen(3000, () => {
  console.log('listening on port 3000');
});
