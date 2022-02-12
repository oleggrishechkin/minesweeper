import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';
import startTimeState from '../states/startTimeState';
import flagBombs from './flagBombs';

const win = () => {
    if (!startTimeState()) {
        return;
    }

    endTimeState(Date.now());
    gameOverState('win');
    flagBombs();
};

export default win;
