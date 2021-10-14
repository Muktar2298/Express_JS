const express = require('express');
const { add } = require('lodash');

const app = express(); // main app(parent app)
const admin = express(); // sub app(child app)

// mount event
admin.on('mount', (parent) => {
  console.log('Admin Mounted!');
  console.log(parent);
});

// sub app(admin) Request methods
admin.get('/dashboard', (req, res) => {
  console.log(admin.mountpath);
  res.send('Welcome to Admin dashboard!');
});

//--main app Request method
app.get('/', (req, res) => {
  console.log(app.mountpath);
  res.send('Welcome to Home page!!');
});

// define which function shoul our main application use
app.use('/admin', admin);

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
