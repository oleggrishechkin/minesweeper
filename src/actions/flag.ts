import { Cell } from '../states/boardState';
import startTimeState from '../states/startTimeState';
import flagsState from '../states/flagsState';
import flagCell from './flagCell';

const flag = (cell: Cell) => {
    if (!startTimeState()) {
        return;
    }

    if (!cell.isOpened && (cell.isFlag || flagsState() > 0)) {
        flagCell(cell);
    }
};

export default flag;
