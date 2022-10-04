import React from 'react';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

export const GameGridItem = ({ input }) => {
  return <p className={[style['grid-item']].join(' ')}>{input}</p>;
};
