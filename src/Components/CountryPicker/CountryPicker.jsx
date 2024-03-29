import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import './CountryPicker.css';

const Countries = ({ handleCountryChange }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
     fetchAPI();
  }, []);

    return(
        <>
            <FormControl className='formControl'>
            <NativeSelect defaultValue="" onChange={ (e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
            </FormControl>
        </>
    );
};

export default Countries;