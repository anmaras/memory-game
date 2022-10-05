import React, { useCallback, useEffect, useState } from 'react';
import { GameGridItem } from './GameGridItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconArr6x6, iconArr4x4 } from '../../../utils/helpers/iconArrayMaker';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

const GameGrid = React.memo(({ theme, grid, shuffling }) => {
  const [finalArray, setFinalArray] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [number, setNumber] = useState(0);

  const shuffle = (c) => {
    let num = '';
    for (let i = c.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      num = c[j];
      c[j] = c[i];
      c[i] = num;
    }
    return c;
  };

  const iconArray = useCallback(
    (size) => {
      size === 6 ? setIconArr(iconArr6x6) : setIconArr(iconArr4x4);
      return shuffle(iconArr.concat(iconArr)).map((item) => (
        <FontAwesomeIcon icon={item} />
      ));
    },
    [iconArr]
  );

  const numberArray = useCallback(
    (size) => {
      size === 6 ? setNumber(18) : setNumber(8);
      return shuffle([...Array(number).keys(), ...Array(number).keys()]);
    },
    [number]
  );

  useEffect(() => {
    if (theme === 'icons') {
      setFinalArray(iconArray(grid));
    } else if (theme === 'numbers') {
      setFinalArray(numberArray(grid));
    }
  }, [grid, iconArray, numberArray, theme, shuffling]);

  return (
    <section className={style['grid-container']}>
      <ul
        className={[
          style['grid-list'],
          `${grid === 6 ? style.list36 : style.list16}`,
        ].join(' ')}
      >
        {finalArray.map((item, index) => {
          return (
            <li
              className={[
                style['grid-list-item'],
                `${grid === 6 ? style.grid36 : style.grid16}`,
              ].join(' ')}
              key={index}
            >
              <GameGridItem input={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
});
export { GameGrid };
