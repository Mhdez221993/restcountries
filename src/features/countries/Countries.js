import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { allCountriesAsync, countriesAsync } from './countriesSlice';

function Countries() {
  const dispatch = useDispatch();
  const { countries } = useSelector(({ countries }) => countries);

  const handleKeyDown = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(countriesAsync(value));
  };

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountriesAsync());
    }
  }, []);

  return (
    <div>
      <Form noValidate>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Search"
            name="name"
            onChange={handleKeyDown}
          />
        </Form.Group>

      </Form>

      <ul>
        {countries.map(({ name }) => (<li key={name}>{name}</li>))}
      </ul>
    </div>
  );
}

export default Countries;
