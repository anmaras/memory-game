import React, { useEffect, useRef, useState } from 'react';

import style from '../../../styles/Components/GameSolo/GameFooter.module.css';

export const GameFooter = ({ playerMoves, timerStart }) => {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (timerStart) {
      countRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(countRef.current);
    }
  }, [timerStart]);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <footer className={style.footer}>
      <div className={style['timer-container']}>
        <h3 className={style['timer-title']}>Time</h3>
        <p className={style.timer}>{formatTime()}</p>
      </div>
      <div className={style['moves-container']}>
        <h3 className={style['moves-title']}>Moves</h3>
        <p className={style.moves}>{playerMoves}</p>
      </div>
    </footer>
  );
};
