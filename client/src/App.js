import React from 'react';
import Customer from './components/Customer';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
}));

function App() {
  const classes = useStyles(); // 스타일 클래스를 가져오기

  const customers = [
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
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <Customer key={c.id} {...c} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
