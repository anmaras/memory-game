import React from 'react';
import style from '../../../styles/Components/UI/MenuSelection.module.css';

export const MenuSelection = ({ textInput = 'default text' }) => {
  return <button className={style['menuSelection']}>{textInput}</button>;
};
