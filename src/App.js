import style from './styles/App/App.module.css';

import { Game, StartGame, GameModal } from './Components';

function App() {
  return (
    <main className={style.app}>
      {/* <StartGame /> */}
      <GameModal />
      <Game />
    </main>
  );
}

export default App;
