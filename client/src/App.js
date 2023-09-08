import React, { useEffect, useState } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import CustomerAdd from './components/CustomerAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles(); // material-ui 스타일 클래스를 가져오기
  const [customers, setCustomers] = useState([]); // customers 상태를 useState를 사용하여 정의
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // axios를 사용하여 데이터를 가져옴
    axios
      .get('/api/customers')
      .then((response) => {
        if (response.status === 200) {
          // 데이터를 가져온 후에 setCustomers를 사용하여 상태 업데이트

          setCustomers(response.data);
        } else {
          console.error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [customers]);

  return (
    <div>
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
              <TableCell>설정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.length > 0 ? (
              customers.map((c) => <Customer key={c.id} {...c} />)
            ) : (
              <TableRow>
                <TableCell colSpan='6' align='center'>
                  <CircularProgress
                    variant='determinate'
                    value={progress}
                    className={classes.progress}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd />
    </div>
  );
}

export default App;
