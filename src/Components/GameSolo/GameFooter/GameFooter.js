import React, { useEffect, useRef, useState } from 'react';
import style from '../../../styles/Components/GameSolo/GameFooter.module.css';

export const GameFooter = ({ getPlayerTime, data }) => {
  const { gameStarted, playerMoves, gameOver } = data;
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);
  const timerRef = useRef('0');

  useEffect(() => {
    clearInterval(countRef.current);
    countRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    if (gameOver) {
      clearInterval(countRef.current);
    }
    if (!gameStarted) {
      clearInterval(countRef.current);
      setTimer(0);
    }
  }, [gameOver, gameStarted]);

  useEffect(() => {
    getPlayerTime(timerRef.current.textContent);
  }, [getPlayerTime]);

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
        <p className={style.timer} ref={timerRef}>
          {formatTime()}
        </p>
      </div>
      <div className={style['moves-container']}>
        <h3 className={style['moves-title']}>Moves</h3>
        <p className={style.moves}>{playerMoves}</p>
      </div>
    </footer>
  );
};
