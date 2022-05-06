import Countries from '../features/countries/Counter';
import Game from '../features/game/Counter';
import Sigin from '../features/sigin/Counter';
import Sigup from '../features/sigup/Counter';

const routes = [
  {
    name: 'Restcountries',
    path: '/',
    component: <Game />,
  },
  {
    name: 'sigin',
    path: '/sigin',
    component: <Sigin />,
  },
  {
    name: 'sigup',
    path: '/sigup',
    component: <Sigup />,
  },
  {
    name: 'All Countries',
    path: '/all-countries',
    component: <Countries />,
  },
];

export default routes;
