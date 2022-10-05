import React, { useRef } from 'react';
import style from '../../../styles/Components/UI/MenuSelection.module.css';

export const MenuSelection = ({ textInput = 'default text', onClick }) => {
  const input = useRef(null);
  return (
    <button
      className={style['menuSelection']}
      ref={input}
      onClick={() => {
        if (input.current.textContent === '4x4') {
          onClick(4);
        } else if (input.current.textContent === '6x6') {
          onClick(6);
        } else onClick(input.current.textContent);
      }}
    >
      {textInput}
    </button>
  );
};
