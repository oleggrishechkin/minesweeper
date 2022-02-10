import boardState from '../states/boardState';
import generateBoardState from '../utils/generateBoardState';
import widthState from '../states/widthState';
import heightState from '../states/heightState';
import bombCountState from '../states/bombCountState';
import startTimeState from '../states/startTimeState';
import open from './open';

const start = (row: number, col: number): void => {
    boardState(generateBoardState(widthState(), heightState(), bombCountState(), row, col));
    startTimeState(Date.now());

    open(boardState()?.board[row][col]);
};

export default start;
