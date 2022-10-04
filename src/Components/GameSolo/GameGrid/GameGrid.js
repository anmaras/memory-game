import React, { useEffect, useState } from 'react';
import { GameGridItem } from './GameGridItem';
import { iconArray, numberArray } from '../../../utils/helpers/iconArrayMaker';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

export const GameGrid = () => {
  const [gridSize, setGridSize] = useState(4);
  const [gridType, setGridType] = useState('icons');
  const array =
    gridType === 'icons' ? iconArray(gridSize) : numberArray(gridSize);

  useEffect(() => {
    setGridSize(6);
    setGridType('numbers');
  }, []);

  return (
    <section className={style['grid-container']}>
      <ul
        className={[
          style['grid-list'],
          `${gridSize === 6 ? style.list36 : style.list16}`,
        ].join(' ')}
      >
        {array.map((item, index) => {
          return (
            <li
              className={[
                style['grid-list-item'],
                `${gridSize === 6 ? style.grid36 : style.grid16}`,
              ].join(' ')}
              key={index}
            >
              <GameGridItem input={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
