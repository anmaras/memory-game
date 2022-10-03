import React from 'react';
import style from '../../../styles/Components/GameSolo/GameFooter.module.css';

export const GameFooter = () => {
  return (
    <footer className={style.footer}>
      <div className={style['timer-container']}>
        <h3 className={style['timer-title']}>Time</h3>
        <p className={style.timer}> 00:00</p>
      </div>
      <div className={style['moves-container']}>
        <h3 className={style['moves-title']}>Moves</h3>
        <p className={style.moves}>0</p>
      </div>
    </footer>
  );
};
