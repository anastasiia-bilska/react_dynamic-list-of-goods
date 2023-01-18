import React from 'react';
import cn from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={cn({
          'has-text-primary': good.color === 'green',
          'has-text-link': good.color === 'blue',
          'has-text-danger': good.color === 'red',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
