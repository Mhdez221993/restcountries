import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../features/nav/Nav';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <NavBar routes={routes} />
        <Routes>
          {routes.map(
            ({ path, component, name }) => (
              <Route exact path={path} element={component} key={name} />
            ),
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
