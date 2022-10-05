import React from 'react';
import style from '../../../styles/Components/UI/Buttons.module.css';

export const ButtonPrimary = ({ textInput = 'restart', modal }) => {
  return (
    <button className={style.buttonPrimary} onClick={() => modal(true)}>
      {textInput}
    </button>
  );
};
