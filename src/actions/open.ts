import boardState, { Cell } from '../states/boardState';
import openCell from '../utils/openCell';
import copyBoard from '../utils/copyBoard';
import win from './win';
import lose from './lose';

const open = (cell?: Cell): void => {
    if (!cell || cell.isOpened || cell.isFlag) {
        return;
    }

    if (cell.isBomb) {
        lose();

        return;
    }

    boardState((board) => board && openCell(copyBoard(board), cell));

    if (boardState()?.cells === 0) {
        win();
    }
};

export default open;
