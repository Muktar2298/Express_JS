const express = require('express');

const app = express(); 

//--main app Request method
app.delete('/', (req, res) => {
  res.send('Welcome to Home page!!');
});

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
