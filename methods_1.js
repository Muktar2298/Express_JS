/* Topic to be Cover 
1.res.end()
2.res.send()
3.res.json()
4.res.status()
5.res.sendStatus()
*/
const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  /* // 1.res.end()
  res.write('This is about page');
  res.end(); */

  /*  // 2.res.send()
    res.send('This is About Page'); */

  /* // 3.res.json()
  res.json({ name: 'Bangladesh' }); */

  /* // 4.res.status()
  res.status(404);
  res.end(); */
  
  /* // 5.res.sendStatus()
  res.sendStatus(200); */
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
