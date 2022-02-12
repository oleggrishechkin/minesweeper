import { ReactElement } from 'react';
import WidthInput from '../WidthInput';
import HeightInput from '../HeightInput';
import BombCountInput from '../BombCountInput';
import styles from './Settings.module.css';

const Settings = (): ReactElement => (
    <div className={styles.settings}>
        <WidthInput />
        <HeightInput />
        <BombCountInput />
    </div>
);

export default Settings;
