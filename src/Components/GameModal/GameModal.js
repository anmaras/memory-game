import React from 'react';
import { useState } from 'react';
import { ButtonSecondary, ButtonPrimary } from '../UI';
import style from '../../styles/Modals/Modals.module.css';
import btnStyle from '../../styles/Components/UI/Buttons.module.css';

const GameEndModal = ({ modal, newGame, restartGame }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={style.backdrop} onClick={() => modal(false)}></div>
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
                <p className={style.time}>0:00</p>
              </div>
              <div>
                <p className={style['moves-text']}>Moves Taken</p>
                <p className={style.moves}>00 Moves</p>
              </div>
            </section>
            <footer className={style.footer}>
              <ButtonPrimary />
              <ButtonSecondary textInput="Setup New Game" />
            </footer>
          </>
        ) : (
          <footer className={style.footer}>
            <>
              <button className={btnStyle.buttonPrimary} onClick={restartGame}>
                restart
              </button>
            </>
            <ButtonSecondary textInput="new game" onClick={newGame} />
          </footer>
        )}
      </article>
    </>
  );
};

export default GameEndModal;
