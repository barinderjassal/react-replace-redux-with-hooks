import * as React from 'react';
import { FC, createElement } from 'react';
import { useProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks/store';
import { Card } from '../UI/Card';

import './styles/product-item.css';

// wrapping in this React.memo so that it would rebuild for the single item whenever
// user marks an item favorite so that prop will change only for that particular item
// and therefore it should not rebuild for all items
export const ProductItem: FC<any> = React.memo((props: any) => {
  // comment the context approach
  // const { toggleFav } = useProductsContext();

  // passing false make sure that this component does not register listener in the global listeners array
  // and should not rebuild whenever the store changes and we just want the dispatch so 
  // not interested in the store state
  const [, dispatch] = useStore(false);
  
  console.log('rendering');

  const toggleFavHandler = () => {
    // comment the context approach
    // toggleFav(props.id);

    // this is the custom dispatch function
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});
