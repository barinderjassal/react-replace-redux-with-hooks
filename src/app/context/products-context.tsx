import { createContext, createElement, FC, useContext, useState } from 'react';
import { DUMMY_PRODUCTS } from '../products-constant';

interface ProductsContextInterface {
  products: any;
  toggleFav: (id: string) => void;
}

const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
  toggleFav: (id: string) => {}
});

export const ProductsContextProvider = ({ children }: any) => {
  const [productsList, setProductsList] = useState(DUMMY_PRODUCTS);

  const toggleFavorite = (productId: string) => {
    setProductsList((currentProducts) => {
      const prodIndex = currentProducts.findIndex(product => product.id === productId);
      const newFavStatus = !currentProducts[prodIndex].isFavorite;
      const updatedProducts = [...currentProducts];
      updatedProducts[prodIndex] = {
        ...currentProducts[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    })
  };

  return (
    <ProductsContext.Provider value={{
      products: productsList,
      toggleFav: toggleFavorite
    }}>
      {children}
    </ProductsContext.Provider>
  )

};

export const useProductsContext = () => useContext(ProductsContext);



