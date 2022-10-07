import React from 'react';
import { ButtonPrimary } from '../../UI';
import style from '../../../styles/Components/GameSolo/GameHeader.module.css';

const GameHeader = ({ modalVisibility }) => {
  return (
    <header className={style.header}>
      <h1 className={style['game-title']}>memory</h1>
      <ButtonPrimary textInput="menu" modalVisibility={modalVisibility} />
    </header>
  );
};

export default GameHeader;
