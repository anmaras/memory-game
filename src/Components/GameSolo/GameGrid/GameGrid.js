import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
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
  currId: null,
  pairs: [],
  gameOver: false,
  playerMoves: 0,
  movesComplete: false,
  time: null,
  idPairs: [],
};

const GameGrid = React.memo(({ theme, grid, shuffling, getData }) => {
  const [finalArray, setFinalArray] = useState([]);
  const [iconArr, setIconArr] = useState([]);
  const [number, setNumber] = useState(0);
  const [playerState, dispatch] = useReducer(
    playerReducer,
    initialPlayerValues
  );
  const [test, setTest] = useState(style.iconSelected);

  const { pairs, gameStarted, moveA, moveB } = playerState;
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

    /* if pair array include value return */
    if (playerState.pairs.includes(value)) {
      return;
    }

    /* if player has not done a move yet  */
    if (!playerState.firstMove) {
      return dispatch({
        type: 'FIRST_MOVE',
        payload: { value: value, id: id },
      });
    }

    /* if player has done the first move and its not the previous move */
    if (!playerState.secondMove && playerState.currId !== id) {
      return dispatch({
        type: 'SECOND_MOVE',
        payload: { value: value, id: id },
      });
    }
  };

  useEffect(() => {
    if (moveA && moveB && moveA === moveB) {
      return dispatch({
        type: 'PAIRS',
        payloadA: moveA,
        payloadB: moveB,
      });
    }
    if (moveA && moveB && moveA !== moveB) {
      setTimeout(() => {
        dispatch({
          type: 'NOT_PAIRS',
        });
      }, 700);
    }
    console.log(playerState);
  }, [playerState, moveA, moveB]);

  useEffect(() => {
    if (pairs.length === finalArray.length && gameStarted) {
      return dispatch({ type: 'GAME_OVER' });
    }
  }, [pairs.length, finalArray.length, gameStarted]);

  useEffect(() => {
    getData(playerState);
  }, [getData, playerState]);

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
                // `${playerState.currId === index ? style.iconSelected : ''}`,
                `${
                  playerState.idPairs.includes(index)
                    ? style.iconSelected
                    : style.iconNotPair
                }`,
                `${
                  playerState.pairs.includes(
                    `${item.props?.icon.iconName || item}`
                  )
                    ? style.iconIsPair
                    : ''
                }`,
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
