/* const express = require('express');
const multer = require('multer');
const app = express();

// file upload folder
const ULOADS_FOLDER = './uploads';

// prepare the final multer upload objects
let upload = multer({
  dest: ULOADS_FOLDER,
  limits: {
    fileSize: 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'avatar') {
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only .jpg , .jpeg , .png image allowed'));
      }
    } else if (file.fieldname === 'doc') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only .pdf allowed'));
      }
    } else {
      cb(new Error('There was an Unknown Error'));
    }
  },
});

// application route
// 1.upload.single()..for single file upload in a single filed
app.post(
  '/',
  upload.fields([{ name: 'avatar' }, { name: 'doc' }]),
  (req, res) => {
    res.send('File Uploaded');
  }
);

// default error handeling using error-handeling middleware.
app.use((err, req, res, next) => {
  if (err) {
    // for multer specif error findout
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an Upload Error');
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send('Successfully Uploaded File');
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
 */