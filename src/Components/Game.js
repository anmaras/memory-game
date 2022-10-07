import { useState } from 'react';
import { GameHeader, GameGrid, GameFooter } from './GameSolo';
import style from '../styles/Components/Game.module.css';

export const Game = ({
  theme,
  grid,
  modalVisibility,
  shuffle,
  getPlayerTime,
  getData,
  data,
}) => {
  return (
    <article className={style.game}>
      <GameHeader modalVisibility={modalVisibility} />
      <GameGrid
        getData={getData}
        theme={theme}
        grid={grid}
        shuffling={shuffle}
      />
      <GameFooter getPlayerTime={getPlayerTime} data={data} />
    </article>
  );
};
