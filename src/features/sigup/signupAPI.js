import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/auth/signup';
// const BASE_URL = 'https://comic-dance-club.herokuapp.com';

const fetchSignup = (payload = {}) => axios
  .post(BASE_URL, payload)
  .then((response) => response.data);

export default fetchSignup;
