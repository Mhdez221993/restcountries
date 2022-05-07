import Countries from '../features/countries/Countries';
import Game from '../features/game/Game';
import Signin from '../features/sigin/Sigin';
import Signup from '../features/sigup/Signup';

const routes = [
  {
    name: 'Restcountries',
    path: '/',
    component: <Game />,
  },

  {
    name: 'Countries',
    path: '/countries',
    component: <Countries />,
  },
  {
    name: 'Signin',
    path: '/signin',
    component: <Signin />,
  },
  {
    name: 'Signup',
    path: '/signup',
    component: <Signup />,
  },
];

export default routes;
