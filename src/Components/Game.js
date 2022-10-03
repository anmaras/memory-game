import React from 'react';
import { GameHeader, GameGrid, GameFooter } from './GameSolo';
import style from '../styles/Components/Game.module.css';

export const Game = () => {
  return (
    <article className={style.game}>
      <GameHeader />
      <GameGrid />
      <GameFooter />
    </article>
  );
};
