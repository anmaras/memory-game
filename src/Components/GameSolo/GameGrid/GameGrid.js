import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconArr6x6, iconArr4x4 } from '../../../utils/helpers/iconArrayMaker';
import { playerReducer } from '../../../Reducers/playerReducer';
import style from '../../../styles/Components/GameSolo/GameGrid.module.css';

const initialPlayerValues = {
  gameStarted: false,
  moveA: null,
  moveB: null,
  firstMove: false,
  secondMove: false,
  movesComplete: false,
  currId: null,
  pairs: [],
  gameOver: false,
  playerMoves: 0,
};

const GameGrid = React.memo(
  ({ theme, grid, shuffling, getMoves, getGameStart }) => {
    const [finalArray, setFinalArray] = useState([]);
    const [iconArr, setIconArr] = useState([]);
    const [number, setNumber] = useState(0);
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

      if (playerState.pairs.includes(+value)) {
        return;
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

      if (playerState.pairs.length === finalArray.length) {
        dispatch({ type: 'GAME_OVER' });
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
      console.log(playerState);
    }, [playerState]);

    useEffect(() => {
      if (playerState.pairs.length === finalArray.length) {
        return dispatch({ type: 'GAME_OVER' });
      }
    }, [playerState.pairs.length, finalArray.length]);

    useEffect(() => {
      getMoves(playerState.playerMoves);
      getGameStart(playerState.gameStarted);
    }, [
      playerState.playerMoves,
      getMoves,
      playerState.gameStarted,
      getGameStart,
    ]);

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
  }
);
export { GameGrid };
