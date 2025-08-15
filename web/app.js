const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối thành công với MongoDB!'))
  .catch(err => console.error('Kết nối thất bại!', err));

app.get('/', (req, res) => {
  res.send('Xin chào từ microservice web!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});
