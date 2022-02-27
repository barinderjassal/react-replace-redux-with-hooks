import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from '../src/app/context/products-context';
import './index.css';
import { configureProductsStore } from './app/hooks/products-store';

/**
 * Comment out the Context approach
 */
// render(<ProductsContextProvider>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </ProductsContextProvider>, document.getElementById('app'));

configureProductsStore()

render(<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('app'));
