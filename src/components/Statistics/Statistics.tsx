import { ReactElement } from 'react';
import Timer from '../Timer';
import InitButton from '../InitButton';
import FlagCount from '../FlagCount';
import styles from './Statistics.module.css';

const Statistics = (): ReactElement => (
    <div className={styles.statistics}>
        <FlagCount />
        <InitButton />
        <Timer />
    </div>
);

export default Statistics;
