import { FC, createElement } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/navigation.css';

export const Navigation: FC = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
