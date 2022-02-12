import { ReactElement } from 'react';
import Timer from '../Timer';
import ClearButton from '../ClearButton';
import FlagCount from '../FlagCount';
import styles from './Statistics.module.css';

const Statistics = (): ReactElement => (
    <div className={styles.statistics}>
        <FlagCount />
        <ClearButton />
        <Timer />
    </div>
);

export default Statistics;
