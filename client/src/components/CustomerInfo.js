import React from 'react';

const CustomerInfo = (props) => {
  const { birthday, gender, job } = props;
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};

export default CustomerInfo;
