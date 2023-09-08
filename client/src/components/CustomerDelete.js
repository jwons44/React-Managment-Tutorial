import React from 'react';

const CustomerDelete = ({ id }) => {
  const deleteCustomer = () => {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <button onClick={deleteCustomer}>삭제</button>
    </div>
  );
};

export default CustomerDelete;
