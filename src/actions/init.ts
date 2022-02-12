import startTimeState from '../states/startTimeState';
import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';
import initBoard from './initBoard';

const init = () => {
    initBoard();
    startTimeState(null);
    endTimeState(null);
    gameOverState(null);
};

export default init;
