import style from './styles/App/App.module.css';

import { StartGame } from './Components';

function App() {
  return (
    <main className={style.app}>
      <StartGame />
    </main>
  );
}

export default App;
