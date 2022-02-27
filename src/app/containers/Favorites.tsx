import { FC, createElement } from 'react';
import { FavoriteItem } from '../components';
import { useProductsContext } from '../context/products-context';
import { useStore } from '../hooks/store';

import './styles/products.css';

const Favorites: FC = () => {
  // comment the context approach
  // const { products } = useProductsContext();

  const [ state ] = useStore();
  const favoriteProducts = state.products.filter((product: any) => product.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod: any) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
