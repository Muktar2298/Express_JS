const express = require('express');
const app = express();

/* // 1.express.json()
app.use(express.json()); */

/* //2.express.raw()
app.use(express.raw()); */

/* //3.express.text() 
app.use(express.text()); */

//4.express.urlencoded()
app.use(express.urlencoded());

// 5.express.static()
app.use(express.static(`${__dirname}/staticFolder`,{
    index:'home.html'
}));

app.get('/', (req, res) => {
  res.send('This is home page with get requests');
});

app.post('/', (req, res) => {
//   console.log(req.body);
  res.send('This is home page with get requests');
});

//Create server with port
app.listen(3000, () => {
  console.log('listening on port 3000');
});
