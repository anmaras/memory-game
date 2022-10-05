import style from './styles/App/App.module.css';
import { Game, StartGame, GameModal } from './Components';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const updateTheme = (input) => setTheme(input);
  const selectGridSize = (input) => setGridSize(input);
  const startGame = (input) => (theme && gridSize ? setGameStarted(input) : '');
  const modalVisibility = (input) => setModalVisible(input);
  const newGame = () => {
    setTheme(null);
    setGridSize(null);
    setGameStarted(false);
    setModalVisible(false);
  };
  const restartGame = () => {
    setShuffle(!shuffle);
  };

  if (!gameStarted) {
    return (
      <main className={style.app}>
        <StartGame
          changeTheme={updateTheme}
          changeGrid={selectGridSize}
          gameStarted={startGame}
        />
      </main>
    );
  } else {
    return (
      <main className={style.app}>
        <Game
          theme={theme}
          grid={gridSize}
          modal={modalVisibility}
          shuffle={shuffle}
        />
        {modalVisible && (
          <GameModal
            modal={modalVisibility}
            newGame={newGame}
            restartGame={restartGame}
          />
        )}
      </main>
    );
  }
}

export default App;
