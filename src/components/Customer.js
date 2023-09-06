import React from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerProfile from './CustomerProfile';

const Customer = (props) => {
  const { id, image, name, birthday, gender, job } = props;
  return (
    <div>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
};

export default Customer;
