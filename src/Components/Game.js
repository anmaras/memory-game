import { useState } from 'react';
import { GameHeader, GameGrid, GameFooter } from './GameSolo';
import style from '../styles/Components/Game.module.css';

export const Game = ({ theme, grid, modal, shuffle }) => {
  const [moves, setMoves] = useState(0);
  const [isActive, setIsActive] = useState();

  const getPlayerMoves = (moves) => {
    return setMoves(moves);
  };

  const getGameStarted = (input) => {
    return setIsActive(input);
  };

  return (
    <article className={style.game}>
      <GameHeader modal={modal} />
      <GameGrid
        theme={theme}
        grid={grid}
        shuffling={shuffle}
        getMoves={getPlayerMoves}
        getGameStart={getGameStarted}
      />
      <GameFooter playerMoves={moves} timerStart={isActive} />
    </article>
  );
};
