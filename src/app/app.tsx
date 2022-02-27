import { FC, createElement, Fragment, } from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from './components';
import Favorites from './containers/Favorites';
import Products from './containers/Products';

export const App: FC = () => {
  return (
    <Fragment>
     <Navigation />
      <main>
        <Route path="/" component={Products} exact />
        <Route path="/favorites" component={Favorites} />
      </main>
    </Fragment>
  );
};
