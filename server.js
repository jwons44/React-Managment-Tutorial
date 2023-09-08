const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysqlConnection = require('./mysql'); // mysql.js 파일을 가져옴

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  mysqlConnection.query('SELECT * FROM CUSTOMER', (err, rows, fields) => {
    if (!err) {
      res.send(rows); // 결과를 클라이언트에 보냄
    } else {
      console.log(err);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
