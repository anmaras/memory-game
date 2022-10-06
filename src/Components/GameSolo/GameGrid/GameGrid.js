import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconArr6x6, iconArr4x4 } from '../../../utils/helpers/iconArrayMaker';
import { playerReducer } from '../../../Reducers/playerReducer';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

const initialPlayerValues = {
  moveA: null,
  moveB: null,
  firstMove: false,
  secondMove: false,
  movesComplete: false,
  currId: null,
  pairs: [],
  gameOver: false,
};

const GameGrid = React.memo(({ theme, grid, shuffling }) => {
  const [finalArray, setFinalArray] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [number, setNumber] = useState(0);
  const [pairsList, setPairList] = useState([]);
  // const [isActive, setIsActive] = useState(false);
  // const [id, setId] = useState('');

  const [playerState, dispatch] = useReducer(
    playerReducer,
    initialPlayerValues
  );

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

  /* player moves */

  const playerMove = (e, id) => {
    let value = '';
    if (theme === 'icons') {
      value = e.currentTarget.firstChild.firstChild.dataset.icon;
    } else {
      value = e.currentTarget.firstChild.textContent;
    }
    if (!playerState.firstMove) {
      return dispatch({
        type: 'FIRST_MOVE',
        payload: { value: value, id: id },
      });
    }
    if (!playerState.secondMove && playerState.currId !== id) {
      return dispatch({ type: 'SECOND_MOVE', payload: value });
    }
  };

  useEffect(() => {
    if (
      playerState.moveA &&
      playerState.moveB &&
      playerState.moveA === playerState.moveB
    ) {
      return dispatch({
        type: 'PAIRS',
        payloadA: playerState.moveA,
        payloadB: playerState.moveB,
      });
    }
    if (
      playerState.moveA &&
      playerState.moveB &&
      playerState.moveA !== playerState.moveB
    ) {
      return dispatch({
        type: 'NOT_PAIRS',
      });
    }
  }, [playerState]);
  console.log(playerState, finalArray);

  // console.log(playerState, pairsList);

  // useEffect(() => {
  //   if (playerState.moveA === playerState.moveB) {
  //     const newPair = [playerState.moveA, playerState.moveB];
  //     dispatch({
  //       type: 'PAIR',
  //       payload: newPair,
  //     });
  //   }
  // }, [playerState.moveA, playerState.moveB]);

  // const resetMoves = () => {
  //   setPlayer({
  //     moveA: null,
  //     moveB: null,
  //     firstMove: false,
  //     secondMove: false,
  //     movesComplete: false,
  //     foundPair: false,
  //     currId: null,
  //   });
  // };

  // useEffect(() => {
  //   if (player.firstMove && player.secondMove) {
  //     if (player.moveA === player.moveB) {
  //       setPair(true);
  //       // setPlayer(initialPlayerValues);
  //       setPairs([...pairs, player.moveA, player.moveB].map(Number));
  //     } else {
  //       console.log('no point');
  //       // setPlayer(initialPlayerValues);
  //     }
  //   }
  // }, [player.firstMove, player.moveA, player.moveB, player.secondMove]);

  // useEffect(() => {
  //   console.log('its a pair');
  // }, [isPair]);

  // console.log(playerState);
  // console.log(playerState);

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
                // `${isActive && id === index && style.iconSelected}`,
              ].join(' ')}
              key={index}
              onClick={(e) => {
                playerMove(e, index);
              }}
              id={index}
            >
              <p
                className={[
                  style['grid-item'],
                  // `${isActive && id === index && style.iconVisible}`,
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
