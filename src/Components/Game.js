import { GameHeader, GameGrid, GameFooter } from './GameSolo';
import { motion } from 'framer-motion';

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
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={style.game}
    >
      <GameHeader modalVisibility={modalVisibility} />
      <GameGrid
        getData={getData}
        theme={theme}
        grid={grid}
        shuffling={shuffle}
      />
      <GameFooter getPlayerTime={getPlayerTime} data={data} shuffle={shuffle} />
    </motion.article>
  );
};
