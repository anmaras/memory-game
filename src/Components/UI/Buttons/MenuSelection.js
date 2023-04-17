import React, { useEffect, useState } from 'react';
import style from '../../../styles/Components/UI/MenuSelection.module.css';

export const MenuSelection = ({ textInput = 'default text', onClick }) => {
  const [theme, setTheme] = useState();
  const [grid, setGrid] = useState();

  const test = (e) => {};

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <button
      className={[
        style['menuSelection'],
        `${theme === 'icons' ? style.isActive : ''}`,
      ].join(' ')}
      onClick={(e) => {
        if (e.target.textContent === '4x4') {
          onClick(4);
          setGrid(e.target.textContent);
        }
        if (e.target.textContent === '6x6') {
          onClick(6);
          setGrid(e.target.textContent);
        }
        if (e.target.textContent === 'numbers') {
          onClick(e.target.textContent);
          test(e.target.textContent);
        }
        if (e.target.textContent === 'icons') {
          onClick(e.target.textContent);
          test(e.target.textContent);
        }
      }}
    >
      {textInput}
    </button>
  );
};
