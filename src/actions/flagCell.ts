import { mutated } from 'react-tagged-state';
import { Cell } from '../states/boardState';
import flagsState from '../states/flagsState';

const flagCell = (cell: Cell) => {
    const isFlag = cell.isFlag;

    cell.isFlag = !isFlag;
    mutated(cell);
    flagsState((flags) => flags + (isFlag ? 1 : -1));
};

export default flagCell;
