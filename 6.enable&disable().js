const express = require('express');

const app = express();

/* // 1.app.enable()
 app.enable('case sensitive routing');
// .app.enabled()
app.enabled(true); */


/* // 2.app.disable()
app.disable('case sensitive routing'); 
// app.disbled();
app.disabled(false); */


//--main app Request method
app.all('/home', (req, res) => {
  res.send('Welcome to Home page!!');
});

// create server with port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
