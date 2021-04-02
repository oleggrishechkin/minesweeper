import endTimeState from '../states/endTime';
import gameOverState from '../states/gameOverState';
import boardState from '../states/boardState';
import openBombs from '../utils/openBombs';
import copyBoard from '../utils/copyBoard';

const lose = (): void => {
    endTimeState(Date.now());
    gameOverState('lose');
    boardState((board) => board && openBombs(copyBoard(board)));
};

export default lose;
