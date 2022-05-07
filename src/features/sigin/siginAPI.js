import axios from 'axios';

const BASE_URL = 'https://restcountries-app.herokuapp.com/api/v1/auth/login';

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
