import React from 'react';
import { GameHeader, GameGrid, GameFooter } from './GameSolo';
import style from '../styles/Components/Game.module.css';

export const Game = ({ theme, grid, modal, shuffle }) => {
  return (
    <article className={style.game}>
      <GameHeader modal={modal} />
      <GameGrid theme={theme} grid={grid} shuffling={shuffle} />
      <GameFooter />
    </article>
  );
};
