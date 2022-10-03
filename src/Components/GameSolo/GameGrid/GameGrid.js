import React from 'react';
import { GameGridItem } from './GameGridItem';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

export const GameGrid = () => {
  return (
    <section className={style['grid-container']}>
      <ul className={style['grid-list']}>
        {[...Array(16)].map((item, index) => {
          return (
            <li className={style['grid-list-item']} key={index}>
              <GameGridItem input={index} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
