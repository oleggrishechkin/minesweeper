import { mutated } from 'react-tagged-state';
import boardState from '../states/boardState';

const openBombs = () => {
    const board = boardState();

    if (!board) {
        return;
    }

    const rowsCount = board.length;
    const colsCount = board[0].length;

    for (let row = 0; row < rowsCount; row++) {
        for (let col = 0; col < colsCount; col++) {
            const cell = board[row][col];
            if (cell.isBomb) {
                cell.isOpened = true;
                mutated(cell);
            }
        }
    }
};

export default openBombs;
