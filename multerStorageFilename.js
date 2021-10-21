const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// File Uploading Folder
const UPLOADS_FOLDER = './uploads';

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    // file format = (Important File.pdf => important-file.pdf)
    const fileExtension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExtension, '')
        .toLocaleLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();
    cb(null, fileName + fileExtension);
  },
});

// Prepare the final multer upload objects
let upload = multer({
  storage: storage,
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

app.post('/', (req, res) => {
  res.send('File  was successfully uploaded');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
