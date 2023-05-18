import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = function() {
    console.log(`Clicked on ${country.name.common}`)
    onCountryClicked(country)
  }

  return <option onClick={handleClick}>{country.name.common}</option>
}

export default ListItem;

// Value of index needs to be added to option
