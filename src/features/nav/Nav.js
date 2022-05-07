import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavBar = ({ routes }) => (
  <nav className="navBar">
    <div className="nav-list">
      {routes.map(
        ({ name, path }) => (
          <Link className={name} to={path} key={name}>{name}</Link>
        ),
      )}
    </div>
  </nav>
);

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;
