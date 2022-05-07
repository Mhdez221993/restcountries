import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/countries';
const ORIGINAL_URL = 'https://restcountries.com/v2/all';
const TOKEN = JSON.parse(localStorage.getItem('token'));
// const BASE_URL = 'https://comic-dance-club.herokuapp.com';

export const fetchCountries = (name = '') => axios
  .get(`${BASE_URL}/search-all?query=${name}`, { headers: { Authorization: TOKEN } })
  .then((response) => response.data);

export const fetchAllCountries = () => axios
  .get(ORIGINAL_URL)
  .then((response) => response.data);
