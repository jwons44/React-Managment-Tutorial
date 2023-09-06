import React from 'react';

const CustomerProfile = (props) => {
  const { id, name, image } = props;
  return (
    <div>
      <img src={image} alt='profile' />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
};

export default CustomerProfile;
