const express = require('express');
const app = express();
const handle = require("./handle");


// 1.app.locals
app.locals.title = 'My App';
app.locals.email = 'muktar.webdev@gmail.com';

//--Request method
app.get('/',handle);

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
