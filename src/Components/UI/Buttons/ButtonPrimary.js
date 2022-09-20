import React from 'react';
import style from '../../../styles/Components/UI/Buttons.module.css';

export const ButtonPrimary = ({ textInput = 'restart' }) => {
  return <button className={style.buttonPrimary}>{textInput}</button>;
};
