const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('Hello Programmer!');
    },
    'text/html': () => {
      // res.send('<h1>Hello programmers!</h1>');
      res.render('pages/about.ejs', { name: 'Node JS Programmer' });
    },

    'application/json': () => {
      res.send({ message: ' JavaScript Programmer!' });
    },

    default: () => {
      res.status(406).send('Not Acceptable');
    },
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
