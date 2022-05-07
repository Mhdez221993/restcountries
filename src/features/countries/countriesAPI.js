import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/countries/search-all';
const ORIGINAL_URL = 'https://restcountries.com/v2/all';
// const BASE_URL = 'https://comic-dance-club.herokuapp.com';

export const fetchCountries = (payload = {}) => axios
  .get(BASE_URL, payload)
  .then((response) => response.data);

export const fetchAllCountries = () => axios
  .get(ORIGINAL_URL)
  .then((response) => {
    const { data } = response;
    console.log(data);
    console.log('here');
    return response.data;
  });
