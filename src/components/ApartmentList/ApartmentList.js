import React from 'react';

import classes from './ApartmentList.module.scss';

import ApartmentItem from './ApartmentItem';

const apartmentList = props => {
  const {apartments} = props;

  if (apartments === null) {
    return <p>There are no any apartments</p>;
  }
  const apartment = apartments.map((apartment) => {
    return <ApartmentItem 
              key={apartment.id}
              apartment={apartment} />
  });

  return (
    <ul className={classes.ApartmentList}>
      {apartment}
    </ul>
  );
};
export default apartmentList;