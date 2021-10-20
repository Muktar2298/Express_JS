/* Topic to be Cover 
1.res.app
2.res.locals
3.res.headerSent
*/

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  // console.log(res.headersSent);
  // 2.res.localsName
  res.render('pages/about.ejs', {
    name: 'Bangladesh',
    message:'Welcome to About page'
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
