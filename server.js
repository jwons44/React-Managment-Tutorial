const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=80&q=80',
      name: '1111홍길동',
      birthday: '961222',
      gender: '남자',
      job: '대학생1111',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=80&q=80',
      name: '홍길동222',
      birthday: '961222',
      gender: '남자',
      job: '대학생2222',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=80&q=80',
      name: '홍길동',
      birthday: '961222',
      gender: '남자',
      job: '대학생333333',
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
