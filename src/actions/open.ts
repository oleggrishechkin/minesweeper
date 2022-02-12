import boardState, { Cell } from '../states/boardState';
import startTimeState from '../states/startTimeState';
import cellsState from '../states/cellsState';
import openCell from './openCell';
import initBoard from './initBoard';
import lose from './lose';
import win from './win';

const open = (cell: Cell) => {
    const startTime = startTimeState();

    if (!startTime) {
        if (cell.isBomb) {
            initBoard(cell.row, cell.col);

            cell = boardState()![cell.row][cell.col];
        }

        startTimeState(Date.now());
    }

    if (cell.isOpened || cell.isFlag) {
        return;
    }

    if (cell.isBomb) {
        lose();

        return;
    }

    openCell(cell);

    if (cellsState() === 0) {
        win();
    }
};

export default open;
