const handle = (req, res) => {
  console.log(req.app.locals.email);
  res.send('This is home page ');
};

module.exports = handle;
