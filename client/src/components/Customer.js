import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

const Customer = (props) => {
  const { id, image, name, birthday, gender, job } = props;
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt='profile' />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
};

export default Customer;
