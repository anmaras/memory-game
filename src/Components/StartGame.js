import React from 'react';
import { MenuButtonBig, MenuSelection } from './UI';
import style from '../styles/Components/StartGame.module.css';

export const StartGame = () => {
  return (
    <article className={style['section--game-start']}>
      <div>
        <h1 className={style['game-title']}>memory</h1>
      </div>
      <div className={style.gameContainer}>
        <h3>select theme</h3>
        <div className={style['menu--selection-buttons']}>
          <MenuSelection textInput="numbers" />
          <MenuSelection textInput="icons" />
        </div>
        <h3>number of players</h3>
        <div className={style['menu--players-numbers']}>
          <MenuSelection textInput="1" />
          <MenuSelection textInput="2" />
          <MenuSelection textInput="3" />
          <MenuSelection textInput="4" />
        </div>
        <h3>grid size</h3>
        <div className={style['menu--grid-size']}>
          <MenuSelection textInput="4x4" />
          <MenuSelection textInput="6x6" />
        </div>
        <MenuButtonBig />
      </div>
    </article>
  );
};
