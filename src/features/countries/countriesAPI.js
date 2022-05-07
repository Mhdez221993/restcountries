import axios from 'axios';

const ORIGINAL_URL = 'https://restcountries.com/v2/all';
const BASE_URL = 'https://restcountries-app.herokuapp.com/api/v1/countries/search-all?query=';
const TOKEN = JSON.parse(localStorage.getItem('token'));

export const fetchCountries = (name = '') => axios
  .get(`${BASE_URL}${name}`, { headers: { Authorization: TOKEN } })
  .then((response) => response.data);

export const fetchAllCountries = () => axios
  .get(ORIGINAL_URL)
  .then((response) => response.data);
