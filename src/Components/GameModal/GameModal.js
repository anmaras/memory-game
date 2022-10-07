import React from 'react';
import { useState } from 'react';
import { ButtonSecondary, ButtonPrimary } from '../UI';
import style from '../../styles/Modals/Modals.module.css';
import btnStyle from '../../styles/Components/UI/Buttons.module.css';

const GameEndModal = ({
  modalVisibility,
  startNewGame,
  restartGame,
  time,
  data,
}) => {
  const { playerMoves, gameOver } = data;
  const [menu, setMenu] = useState(gameOver);

  return (
    <>
      <div
        className={style.backdrop}
        onClick={() => modalVisibility(false)}
      ></div>
      <article className={style['modal-container']}>
        {menu ? (
          <>
            <header className={style.header}>
              <h3 className={style.title}>You did it!</h3>
              <p>Game over! Here's how you got on...</p>
            </header>
            <section className={style['info-wrapper']}>
              <div>
                <p className={style['time-text']}>Time Elapsed</p>
                <p className={style.time}>{time}</p>
              </div>
              <div>
                <p className={style['moves-text']}>Moves Taken</p>
                <p className={style.moves}>{playerMoves} Moves</p>
              </div>
            </section>
            <footer className={style.footer}>
              <ButtonPrimary />
              <ButtonSecondary
                textInput="Setup New Game"
                onClick={startNewGame}
              />
            </footer>
          </>
        ) : (
          <footer className={style.footer}>
            <>
              <button className={btnStyle.buttonPrimary} onClick={restartGame}>
                restart
              </button>
            </>
            <ButtonSecondary textInput="new game" onClick={startNewGame} />
          </footer>
        )}
      </article>
    </>
  );
};

export default GameEndModal;
