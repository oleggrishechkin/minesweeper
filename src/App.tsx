import { ReactElement } from 'react';
import Board from './components/Board/Board';
import Settings from './components/Settings/Settings';
import Statistics from './components/Statistics/Statistics';
import styles from './App.module.css';

const App = (): ReactElement => (
    <main className={styles.app}>
        <Settings />
        <Statistics />
        <Board />
    </main>
);

export default App;
