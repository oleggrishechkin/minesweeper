import boardState, { Cell } from '../states/boardState';
import openCell from '../utils/openCell';
import copyBoard from '../utils/copyBoard';
import startTimeState from '../states/startTimeState';
import generateBoardState from '../utils/generateBoardState';
import widthState from '../states/widthState';
import heightState from '../states/heightState';
import bombCountState from '../states/bombCountState';
import lose from './lose';
import win from './win';

const open = (cell?: Cell): void => {
    if (!cell || cell.isOpened || cell.isFlag) {
        return;
    }

    const startTime = startTimeState();

    if (!startTime) {
        if (cell.isBomb) {
            const board = generateBoardState(widthState(), heightState(), bombCountState(), cell.row, cell.col);

            cell = board.board[cell.row][cell.col];

            boardState(board);
        }

        startTimeState(Date.now());
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
