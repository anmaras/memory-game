import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconArr6x6, iconArr4x4 } from '../../../utils/helpers/iconArrayMaker';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

const GameGrid = React.memo(({ theme, grid, shuffling }) => {
  const [finalArray, setFinalArray] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [number, setNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState('');

  const [player, setPlayer] = useState({
    moveA: null,
    moveB: null,
    firstMove: false,
    secondMove: false,
    movesComplete: false,
    foundPair: null,
    currId: null,
  });

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

  const playerMove = (e, id) => {
    let value = '';
    // const value = e.currentTarget.firstChild.textContent;
    if (theme === 'icons') {
      value = e.currentTarget.firstChild.firstChild.dataset.icon;
    } else {
      value = e.currentTarget.firstChild.textContent;
    }

    if (!player.firstMove) {
      setPlayer({ ...player, moveA: value, firstMove: true, currId: id });
    } else if (!player.secondMove && player.currId !== id) {
      setPlayer({
        ...player,
        moveB: value,
        secondMove: true,
        movesComplete: true,
      });
    }

    // if (+e.currentTarget.id === id) {
    //   setIsActive(true);
    //   setId(id);
    // }
    // let value = '';

    // }
    // setSelection(value);
  };

  const resetMoves = () => {
    setPlayer({
      moveA: null,
      moveB: null,
      firstMove: false,
      secondMove: false,
      movesComplete: false,
      foundPair: null,
      currId: null,
    });
  };

  const checkMoves = useCallback(
    (moveA, moveB) => {
      if (player.firstMove && player.secondMove && player.movesComplete) {
        if (moveA === moveB) {
          console.log('point');
        } else {
          console.log('no point');
        }
        resetMoves();
      }
    },
    [player.firstMove, player.movesComplete, player.secondMove]
  );

  useEffect(() => {
    checkMoves(player.moveA, player.moveB);
  }, [player.moveA, player.moveB, checkMoves]);

  console.log(player);

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
                `${style['grid-list-item']}`,
                `${grid === 6 ? style.grid36 : style.grid16}`,
                `${isActive && id === index && style.iconSelected}`,
              ].join(' ')}
              key={index}
              onClick={(e) => playerMove(e, index)}
              id={index}
            >
              <p
                className={[
                  style['grid-item'],
                  `${isActive && id === index && style.iconVisible}`,
                ].join(' ')}
              >
                {item}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
});
export { GameGrid };
