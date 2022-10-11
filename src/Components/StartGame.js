import { useState } from 'react';
import { MenuButtonBig } from './UI';
import { motion } from 'framer-motion';
import style from '../styles/Components/StartGame.module.css';
import btnStyle from '../styles/Components/UI/MenuSelection.module.css';

const StartGame = ({ changeTheme, changeGrid, gameStarted }) => {
  const [numbersActive, setNumbersActive] = useState({
    grid4x4: false,
    grid6x6: false,
  });
  const [iconsActive, setIconsActive] = useState({
    number: false,
    icon: false,
  });

  const setOptions = (e) => {
    const value = e.target.textContent;
    if (value === '4x4') {
      setNumbersActive({ grid4x4: true, grid6x6: false });
      changeGrid(4);
    }
    if (value === '6x6') {
      setNumbersActive({ grid4x4: false, grid6x6: true });
      changeGrid(6);
    }
    if (value === 'numbers') {
      setIconsActive({ number: true, icon: false });
      changeTheme(value);
    }
    if (value === 'icons') {
      setIconsActive({ number: false, icon: true });
      changeTheme(value);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={style['section--game-start']}
    >
      <div>
        <h1 className={style['game-title']}>memory</h1>
      </div>
      <div className={style.gameContainer}>
        <h3>select theme</h3>
        <div className={style['menu--selection-buttons']}>
          <button
            onClick={(e) => {
              setOptions(e);
            }}
            className={[
              btnStyle.menuSelection,
              `${iconsActive.number ? btnStyle.isActive : ''}`,
            ].join(' ')}
          >
            numbers
          </button>
          <button
            onClick={(e) => {
              setOptions(e);
            }}
            className={[
              btnStyle.menuSelection,
              `${iconsActive.icon ? btnStyle.isActive : ''}`,
            ].join(' ')}
          >
            icons
          </button>
        </div>
        {/* <h3>number of players</h3>
        <div className={style['menu--players-numbers']}>
          <MenuSelection textInput="1" />
          <MenuSelection textInput="2" />
          <MenuSelection textInput="3" />
          <MenuSelection textInput="4" />
        </div> */}
        <h3>grid size</h3>
        <div className={style['menu--grid-size']}>
          <button
            onClick={(e) => {
              setOptions(e);
            }}
            className={[
              btnStyle.menuSelection,
              `${numbersActive.grid4x4 ? btnStyle.isActive : ''}`,
            ].join(' ')}
          >
            4x4
          </button>
          <button
            onClick={(e) => {
              setOptions(e);
            }}
            className={[
              btnStyle.menuSelection,
              `${numbersActive.grid6x6 ? btnStyle.isActive : ''}`,
            ].join(' ')}
          >
            6x6
          </button>
        </div>
        <MenuButtonBig onClick={gameStarted} />
      </div>
    </motion.article>
  );
};

export { StartGame };
