import { FC, createElement } from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../components';
import { useProductsContext } from '../context/products-context';
import { useStore } from '../hooks/store';

import './styles/products.css';

const Products: FC = () => {
  // comment the context approach
  // const { products: productList } = useProductsContext();

  const [ state ] = useStore();

  return (
    <ul className="products-list">
      {state.products.map((prod: any) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
