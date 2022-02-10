import boardState from '../states/boardState';
import startTimeState from '../states/startTimeState';
import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';

const clear = (): void => {
    boardState(null);
    startTimeState(null);
    endTimeState(null);
    gameOverState(null);
};

export default clear;
