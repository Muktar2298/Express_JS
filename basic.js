/* const express = require('express');
const multer = require('multer');
const app = express();

// file upload folder
const ULOADS_FOLDER = './uploads';

// prepare the final multer upload objects
let upload = multer({
  dest: ULOADS_FOLDER,
});

// application route

 // 1.upload.single()..for single file upload in a single filed
app.post('/', upload.single('avatar'),(req, res) => {
  res.send('File Uploaded');
}); 

 // 2.upload.array()..for multiple file upload in a single field
app.post('/', upload.array('avatar',3),(req, res) => {
  res.send('File Uploaded');
}); 

/// 3.upload.fiels()..for multiple file or single file upload in multiple field
app.post(
  '/',
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 3 },
  ]),
  (req, res) => {
    res.send('File Uploaded');
  }
);

/// 4.upload.none()...for upload form data
app.post('/', upload.none(), (req, res) => {
  res.send('Fomr Data Uploaded');
}); 

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
 */
