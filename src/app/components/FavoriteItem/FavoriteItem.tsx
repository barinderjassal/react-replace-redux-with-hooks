import { FC, createElement } from 'react';
import { Card } from '../UI/Card';

import './styles/favorite-item.css';

export const FavoriteItem: FC<any> = (props: any) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};
