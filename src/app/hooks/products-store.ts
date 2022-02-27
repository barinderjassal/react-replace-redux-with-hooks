import { initStore } from './store';
import { DUMMY_PRODUCTS } from '../products-constant';

export const configureProductsStore = () => {
  // define all the actions related to products store
  const actions = {
    TOGGLE_FAV: (currentState: any, productId: string) => {
      const prodIndex = currentState.products.findIndex((product: any) => product.id === productId);
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus
      };

      return {
        products: updatedProducts
      };
    }
  }

  initStore(actions, {
    products: DUMMY_PRODUCTS
  });
}