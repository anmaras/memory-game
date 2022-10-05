import React from 'react';
import style from '../../../styles/Components/UI/MenuButtonBig.module.css';

export const MenuButtonBig = ({ onClick }) => {
  return (
    <button className={style['menu--btn-big']} onClick={() => onClick(true)}>
      start game
    </button>
  );
};
