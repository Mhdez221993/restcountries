import axios from 'axios';

const BASE_URL = 'https://restcountries-app.herokuapp.com/api/v1/auth/signup';

const fetchSignup = (payload = {}) => axios
  .post(BASE_URL, payload)
  .then((response) => response.data);

export default fetchSignup;
