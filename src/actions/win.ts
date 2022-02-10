import endTimeState from '../states/endTimeState';
import gameOverState from '../states/gameOverState';
import boardState from '../states/boardState';
import flagBombs from '../utils/flagBombs';
import copyBoard from '../utils/copyBoard';

const win = (): void => {
    endTimeState(Date.now());
    gameOverState('win');
    boardState((board) => board && flagBombs(copyBoard(board)));
};

export default win;
