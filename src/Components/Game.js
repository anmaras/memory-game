import React from 'react';
import { ButtonPrimary, GameTitle } from './UI';
import style from '../styles/Components/Game.module.css';

export const Game = () => {
  return (
    <section style={style.game}>
      <div className={style['game--header']}>
        <GameTitle />
        <ButtonPrimary textInput="menu" />
      </div>
      <div style={style['game--grid']}></div>
      <div className={style['game--info']}></div>
    </section>
  );
};
