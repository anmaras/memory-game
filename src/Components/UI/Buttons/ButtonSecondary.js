import React from 'react';
import style from '../../../styles/Components/UI/Buttons.module.css';

export const ButtonSecondary = ({ textInput = 'Secondary', onClick }) => {
  return (
    <button className={style.buttonSecondary} onClick={onClick}>
      {textInput}
    </button>
  );
};
