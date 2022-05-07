import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/auth/login';
// const BASE_URL = 'https://comic-dance-club.herokuapp.com';

const fetchSigin = (payload = {}) => axios
  .post(BASE_URL, payload)
  .then((response) => {
    if (response.data) {
      localStorage.setItem('token', JSON.stringify(response.data));
      localStorage.setItem('user', JSON.stringify(payload));
    }

    return response.data;
  });

export default fetchSigin;
