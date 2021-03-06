import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAsync } from './signupSlice';

function Signup() {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(
    {
      name: '',
      email: '',
      password: '',
    },
  );

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    dispatch(signupAsync(state))
      .then((response) => {
        if (response.payload === 200) {
          navigate('/signin', { replace: true });
        }
      });

    setValidated(true);
    event.preventDefault();
  };

  return (
    <div>
      <Form noValidate validated={validated}>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            value={state.password}
            placeholder="Password"
            onChange={handleInput}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default Signup;
