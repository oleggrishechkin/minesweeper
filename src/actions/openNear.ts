import getOpenNearStatus from '../utils/getOpenNearStatus';
import boardState, { Cell } from '../states/boardState';
import openNearCells from '../utils/openNearCells';
import copyBoard from '../utils/copyBoard';
import win from './win';
import lose from './lose';

const openNear = (cell: Cell): void => {
    switch (getOpenNearStatus(boardState(), cell)) {
        case -1: {
            lose();

            return;
        }
        case 1: {
            boardState((board) => board && openNearCells(copyBoard(board), cell));

            if (boardState()?.cells === 0) {
                win();
            }
        }
    }
};

export default openNear;
