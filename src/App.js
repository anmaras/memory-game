import style from './styles/App/App.module.css';
import { Game, StartGame, GameModal } from './Components';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [timeToComplete, setTimeToComplete] = useState(0);
  const [data, setData] = useState({});

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

  const getPlayerTime = (value) => {
    setTimeToComplete(value);
  };

  const getData = (data) => {
    setData(data);
  };

  // console.log('data', data);
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
          getData={getData}
          theme={theme}
          grid={gridSize}
          modalVisibility={modalVisibility}
          shuffle={shuffle}
          getPlayerTime={getPlayerTime}
          data={data}
        />
        {modalVisible || data.gameOver ? (
          <GameModal
            modalVisibility={modalVisibility}
            startNewGame={newGame}
            restartGame={restartGame}
            time={timeToComplete}
            data={data}
          />
        ) : (
          ''
        )}
      </main>
    );
  }
}

export default App;
