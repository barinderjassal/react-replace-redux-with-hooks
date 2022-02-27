import { FC, createElement } from 'react';

import './styles/card.css';

export const Card: FC<any> = (props: any) => {
  return <div className="card" style={props.style}>{props.children}</div>;
};
