import boardState from '../states/boardState';
import startTimeState from '../states/startTime';
import endTimeState from '../states/endTime';
import gameOverState from '../states/gameOverState';

const clear = (): void => {
    boardState(null);
    startTimeState(null);
    endTimeState(null);
    gameOverState(null);
};

export default clear;
