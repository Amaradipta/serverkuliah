const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./controllers/studentController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint untuk mahasiswa
app.use('/mahasiswa', studentController);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});