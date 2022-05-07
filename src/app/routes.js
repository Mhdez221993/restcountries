import Countries from '../features/countries/Countries';
import Game from '../features/game/Counter';
import Signin from '../features/sigin/Sigin';
import Sigup from '../features/sigup/Signup';

const routes = [
  {
    name: 'Restcountries',
    path: '/',
    component: <Game />,
  },
  {
    name: 'signin',
    path: '/signin',
    component: <Signin />,
  },
  {
    name: 'sigup',
    path: '/sigup',
    component: <Sigup />,
  },
  {
    name: 'Countries',
    path: '/countries',
    component: <Countries />,
  },
];

export default routes;
