import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './countries.css';
import { allCountriesAsync, countriesAsync } from './countriesSlice';

function Countries() {
  const dispatch = useDispatch();
  const { countries } = useSelector(({ countries }) => countries);
  const [state, setState] = useState('');

  const handleSearch = (e) => {
    dispatch(countriesAsync(state));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setState(e.target.value);
    e.preventDefault();
  };

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountriesAsync());
    }
  }, []);

  return (
    <div>
      <Form noValidate className="form">

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={state}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </Button>

      </Form>

      <ul className="countries">
        {countries.map(({ name }) => (<li key={name}>{name}</li>))}
      </ul>
    </div>
  );
}

export default Countries;
