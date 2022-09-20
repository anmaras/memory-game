import React from 'react';
import style from '../../styles/Components/UI/GameTitle.module.css';

export const GameTitle = ({ classInput = 'game-title' }) => {
  return <h1 className={style[`${classInput}`]}>memory</h1>;
};
