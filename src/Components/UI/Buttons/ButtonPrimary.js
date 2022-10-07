import React from 'react';
import style from '../../../styles/Components/UI/Buttons.module.css';

export const ButtonPrimary = ({ textInput = 'restart', modalVisibility }) => {
  return (
    <button
      className={style.buttonPrimary}
      onClick={() => modalVisibility(true)}
    >
      {textInput}
    </button>
  );
};
