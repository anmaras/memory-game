import React from 'react';
import style from '../../../styles/Components/UI/Buttons.module.css';

export const ButtonSecondary = ({ textInput = 'Secondary' }) => {
  return <button className={style.buttonSecondary}>{textInput}</button>;
};
