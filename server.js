const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysqlConnection = require('./mysql');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  mysqlConnection.query('SELECT * FROM CUSTOMER', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

// 이미지 업로드 폴더 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: '파일을 선택하세요.' });
  }

  const image = '/image/' + req.file.filename;
  const name = req.body.userName;
  const birthday = req.body.birthday;
  const gender = req.body.gender;
  const job = req.body.job;

  const sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  const params = [image, name, birthday, gender, job];

  mysqlConnection.query(sql, params, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).json({ message: '데이터베이스 오류 발생.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
