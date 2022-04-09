import { mut } from 'react-mut';
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
                mut(cell);
            }
        }
    }
};

export default openBombs;
