import { MenuButtonBig, MenuSelection } from './UI';
import style from '../styles/Components/StartGame.module.css';

const StartGame = ({ changeTheme, changeGrid, gameStarted }) => {
  return (
    <article className={style['section--game-start']}>
      <div>
        <h1 className={style['game-title']}>memory</h1>
      </div>
      <div className={style.gameContainer}>
        <h3>select theme</h3>
        <div className={style['menu--selection-buttons']}>
          <MenuSelection textInput="numbers" onClick={changeTheme} />
          <MenuSelection textInput="icons" onClick={changeTheme} />
        </div>
        {/* <h3>number of players</h3>
        <div className={style['menu--players-numbers']}>
          <MenuSelection textInput="1" />
          <MenuSelection textInput="2" />
          <MenuSelection textInput="3" />
          <MenuSelection textInput="4" />
        </div> */}
        <h3>grid size</h3>
        <div className={style['menu--grid-size']}>
          <MenuSelection textInput="4x4" onClick={changeGrid} />
          <MenuSelection textInput="6x6" onClick={changeGrid} />
        </div>
        <MenuButtonBig onClick={gameStarted} />
      </div>
    </article>
  );
};

export { StartGame };
