import { combineReducers, createStore } from 'redux';
import productsReducer from './reducers/products-reducer';

const rootReducer = combineReducers({
  shop: productsReducer
});

const store = createStore(rootReducer);

export default store;
