import { Cell } from '../states/boardState';
import startTimeState from '../states/startTimeState';
import cellsState from '../states/cellsState';
import getOpenNearStatus from '../selectors/getOpenNearStatus';
import openNearCells from './openNearCells';
import win from './win';
import lose from './lose';

const openNear = (cell: Cell) => {
    if (!startTimeState()) {
        return;
    }

    switch (getOpenNearStatus(cell)) {
        case -1: {
            lose();

            return;
        }
        case 1: {
            openNearCells(cell);

            if (cellsState() === 0) {
                win();
            }
        }
    }
};

export default openNear;
