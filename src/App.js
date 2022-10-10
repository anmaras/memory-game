import { Game, StartGame, GameModal } from './Components';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import style from './styles/App/App.module.css';

function App() {
  const [theme, setTheme] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shuffle, setShuffle] = useState(true);
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
    setModalVisible(false);
  };

  const getPlayerTime = (value) => {
    setTimeToComplete(value);
  };

  const getData = (data) => {
    setData(data);
  };

  if (!gameStarted) {
    return (
      <AnimatePresence>
        <motion.main
          key="whenGameStart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={style.app}
        >
          <StartGame
            changeTheme={updateTheme}
            changeGrid={selectGridSize}
            gameStarted={startGame}
          />
        </motion.main>
      </AnimatePresence>
    );
  } else {
    return (
      <AnimatePresence>
        <motion.main key="whenGameLoad" className={style.app}>
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
        </motion.main>
      </AnimatePresence>
    );
  }
}

export default App;
