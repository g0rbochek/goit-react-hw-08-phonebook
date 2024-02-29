import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const changeInput = input => {
    setFilter(input.value);

    dispatch(filterContacts(input.value));
  };
  return (
    <form className="inputWrap">
      <TextField
        autoComplete="off"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={e => changeInput(e.target)}
      />
    </form>
  );
};
