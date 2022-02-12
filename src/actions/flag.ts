import boardState, { Cell } from '../states/boardState';
import flagCell from '../utils/flagCell';
import copyBoard from '../utils/copyBoard';
import startTimeState from '../states/startTimeState';

const flag = (cell: Cell): void => {
    if (!startTimeState()) {
        return;
    }

    if (!cell.isOpened && (cell.isFlag || (boardState()?.flags || 0) > 0)) {
        boardState((board) => board && flagCell(copyBoard(board), cell));
    }
};

export default flag;
