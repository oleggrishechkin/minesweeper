import boardState from '../states/boardState';
import startTimeState from '../states/startTimeState';
import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';
import generateBoardState from '../utils/generateBoardState';
import widthState from '../states/widthState';
import heightState from '../states/heightState';
import bombCountState from '../states/bombCountState';

const clear = (): void => {
    boardState(generateBoardState(widthState(), heightState(), bombCountState()));
    startTimeState(null);
    endTimeState(null);
    gameOverState(null);
};

export default clear;
