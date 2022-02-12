import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';
import startTimeState from '../states/startTimeState';
import openBombs from './openBombs';

const lose = () => {
    if (!startTimeState()) {
        return;
    }

    endTimeState(Date.now());
    gameOverState('lose');
    openBombs();
};

export default lose;
